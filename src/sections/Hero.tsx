<div className="relative w-full aspect-square max-w-md mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl rotate-6 opacity-50 blur-xl"></div>
    <div className="relative glass rounded-3xl p-2 h-full">
        {/* REPLACE THIS SECTION */}
        <img
            src="/profile-pic.jpg"
            alt="Devi Madhuri"
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
        />
        {/* Fallback initials (hidden by default, shown if image fails) */}
        <div className="hidden w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center text-6xl font-bold gradient-text absolute inset-0">
            DM
        </div>
        {/* END REPLACEMENT */}

        <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border border-primary/30 animate-[float_6s_ease-in-out_infinite]">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <i className="fab fa-aws text-orange-400 text-xl"></i>
                </div>
                <div>
                    <div className="text-sm font-semibold">AWS Certified</div>
                    <div className="text-xs text-slate-400">Developer Associate</div>
                </div>
            </div>
        </div>

        <div className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-secondary/30 animate-[float_6s_ease-in-out_infinite_1s]">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <i className="fas fa-brain text-blue-400 text-xl"></i>
                </div>
                <div>
                    <div className="text-sm font-semibold">Gen AI</div>
                    <div className="text-xs text-slate-400">RAG Systems</div>
                </div>
            </div>
        </div>
    </div>
</div>