import { useCallback, useRef } from 'react';
import { useSoundSettings } from '../context/SoundContext';

export const useSound = () => {
    const { soundEnabled } = useSoundSettings();
    const audioContextRef = useRef(null);

    // Initialize audio context on first use
    const getAudioContext = useCallback(() => {
        if (!audioContextRef.current) {
            try {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            } catch (error) {
                console.warn('Web Audio API not supported:', error);
                return null;
            }
        }

        // Resume context if it's suspended (required by browser autoplay policies)
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }

        return audioContextRef.current;
    }, []);

    // Play a sound only if enabled
    const playSound = useCallback((soundFn) => {
        if (!soundEnabled) return;

        try {
            soundFn();
        } catch (error) {
            console.warn('Error playing sound:', error);
        }
    }, [soundEnabled]);

    // Predefined sound effects
    const sounds = {
        // Correct answer: Pleasant ascending tone
        correct: useCallback(() => {
            playSound(() => {
                const ctx = getAudioContext();
                if (!ctx) return;

                [523.25, 659.25, 783.99].forEach((freq, i) => {
                    const oscillator = ctx.createOscillator();
                    const gainNode = ctx.createGain();

                    oscillator.connect(gainNode);
                    gainNode.connect(ctx.destination);

                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';

                    const startTime = ctx.currentTime + (i * 0.1);
                    gainNode.gain.setValueAtTime(0.2, startTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

                    oscillator.start(startTime);
                    oscillator.stop(startTime + 0.2);
                });
            });
        }, [playSound, getAudioContext]),

        // Incorrect answer: Descending buzz
        incorrect: useCallback(() => {
            playSound(() => {
                const ctx = getAudioContext();
                if (!ctx) return;

                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);

                oscillator.frequency.setValueAtTime(300, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
                oscillator.type = 'sawtooth';

                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.3);
            });
        }, [playSound, getAudioContext]),

        // Success: Triumphant fanfare
        success: useCallback(() => {
            playSound(() => {
                const ctx = getAudioContext();
                if (!ctx) return;

                const notes = [261.63, 329.63, 392.00, 523.25]; // C E G C

                notes.forEach((freq, i) => {
                    const oscillator = ctx.createOscillator();
                    const gainNode = ctx.createGain();

                    oscillator.connect(gainNode);
                    gainNode.connect(ctx.destination);

                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';

                    const startTime = ctx.currentTime + (i * 0.15);
                    gainNode.gain.setValueAtTime(0.15, startTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);

                    oscillator.start(startTime);
                    oscillator.stop(startTime + 0.4);
                });
            });
        }, [playSound, getAudioContext]),

        // Click: Subtle UI click
        click: useCallback(() => {
            playSound(() => {
                const ctx = getAudioContext();
                if (!ctx) return;

                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);

                oscillator.frequency.value = 800;
                oscillator.type = 'sine';

                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.05);
            });
        }, [playSound, getAudioContext]),

        // Notification: Gentle alert
        notification: useCallback(() => {
            playSound(() => {
                const ctx = getAudioContext();
                if (!ctx) return;

                [440, 554.37].forEach((freq, i) => {
                    const oscillator = ctx.createOscillator();
                    const gainNode = ctx.createGain();

                    oscillator.connect(gainNode);
                    gainNode.connect(ctx.destination);

                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';

                    const startTime = ctx.currentTime + (i * 0.1);
                    gainNode.gain.setValueAtTime(0.15, startTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);

                    oscillator.start(startTime);
                    oscillator.stop(startTime + 0.15);
                });
            });
        }, [playSound, getAudioContext]),
    };

    return sounds;
};
