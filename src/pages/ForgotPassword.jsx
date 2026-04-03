import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, RefreshCcw } from 'lucide-react';

const ForgotPassword = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative pt-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-primary brutalist-card p-6 md:p-12 relative z-10"
            >
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="mb-8 md:mb-10 text-center">
                                <h1 className="text-4xl md:text-5xl font-heading mb-2">RECOVER_KEY</h1>
                                <p className="text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-accent uppercase">ENTER_IDENTITY_TO_RESET_SECURITY</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono tracking-widest uppercase text-secondary opacity-60">Verified_Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                                        <input
                                            type="email"
                                            placeholder="name@Unique.Culture"
                                            required
                                            className="w-full bg-transparent border-2 border-secondary/10 p-4 pl-12 focus:border-secondary outline-none transition-all font-mono text-sm"
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-secondary text-primary font-heading text-2xl py-4 flex items-center justify-center gap-3 group"
                                >
                                    SEND_RECOVERY_LINK
                                    <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                                </motion.button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-4"
                        >
                            <div className="flex justify-center mb-6">
                                <CheckCircle size={64} className="text-secondary" />
                            </div>
                            <h2 className="text-4xl font-heading mb-4">LINK_TRANSMITTED</h2>
                            <p className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase leading-relaxed mb-8">
                                CHECK_YOUR_INBOX_FOR_FURTHER_INSTRUCTIONS.<br />
                                SECURITY_PROTOCOL_INITIALIZED.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-[10px] font-mono tracking-widest uppercase text-secondary font-bold hover:underline"
                            >
                                RESEND_SIGNAL
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-12 pt-8 border-t border-secondary/10 text-center">
                    <Link to="/login" className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
                        <ArrowLeft size={14} /> Back_To_Terminal
                    </Link>
                </div>
            </motion.div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-heading text-secondary/[0.02] -z-10 whitespace-nowrap pointer-events-none overflow-hidden">
                RECOVERY_MODE
            </div>
        </div>
    );
};

export default ForgotPassword;
