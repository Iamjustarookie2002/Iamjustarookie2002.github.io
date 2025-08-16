import React, { useEffect, useState } from 'react';
import { ArrowLeft, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PASSWORD = 'pswd';

interface VaultItem {
	id: string;
	title: string;
	description?: string;
	link?: string;
	badge?: string;
}

const Vault: React.FC = () => {
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isAuthed, setIsAuthed] = useState(false);
	const [error, setError] = useState('');
	const [items, setItems] = useState<VaultItem[]>([]);
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// Ensure correct theme when opened directly/new tab or reloaded
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'light') {
			document.body.classList.remove('theme-dark');
			document.body.classList.add('theme-light');
		} else {
			document.body.classList.remove('theme-light');
			document.body.classList.add('theme-dark');
		}
	}, []);

	const handleBackToPortfolio = () => {
		navigate('/');
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password === PASSWORD) {
			setIsAuthed(true);
			setError('');
			setLoading(true);
		} else {
			setError('Incorrect password');
		}
	};

	useEffect(() => {
		if (!isAuthed) return;
		const fetchVault = async () => {
			try {
				const response = await fetch('/data/vault.json');
				const data = await response.json();
				setItems(data.items || []);
				setDescription(data.description || '');
			} catch (err) {
				console.error('Error fetching vault items:', err);
			} finally {
				setLoading(false);
			}
		};
		fetchVault();
	}, [isAuthed]);

	const handleOpenLink = (link?: string) => {
		if (link && link.trim() !== '') {
			window.open(link, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<div className="min-h-screen page-bg flex flex-col">
			{/* Header with Back Button */}
			<header className="p-6">
				<button
					onClick={handleBackToPortfolio}
					className="flex items-center gap-2 text-[var(--text-main)] hover:text-[var(--primary)] transition-colors duration-300 group"
				>
					<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
					<span className="text-lg font-medium">Back to Portfolio</span>
				</button>
			</header>

			{/* Main Content */}
			<main className="flex-1 px-6 pb-8">
				<div className="max-w-5xl mx-auto">
					

					{!isAuthed ? (
						<>
							<div className="text-center mb-10">
								<h1 className="text-5xl md:text-6xl font-bold text-[var(--text-main)] mb-3">Secret Vault</h1>
								<p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">This page is protected. Enter the password to access hidden links and cards.</p>
							</div>
							<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg max-w-md mx-auto">
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="flex items-center gap-3">
									<ShieldCheck className="w-6 h-6 text-[var(--primary)]" />
									<h2 className="text-xl font-semibold text-[var(--text-main)]">Access Required</h2>
								</div>
								<div>
									<label className="block text-sm text-[var(--text-secondary)] mb-1">Password</label>
									<div className="relative">
										<input
											type={showPassword ? 'text' : 'password'}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="w-full bg-black/40 border border-gray-700/60 rounded-lg px-4 py-3 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
											placeholder="Enter password"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[var(--text-secondary)] hover:text-[var(--text-main)]"
											aria-label={showPassword ? 'Hide password' : 'Show password'}
										>
											{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
										</button>
									</div>
									{error && <p className="text-red-400 text-sm mt-2">{error}</p>}
								</div>
								<button
									type="submit"
									className="w-full flex items-center justify-center gap-2 bg-[var(--primary)]/90 hover:bg-[var(--primary)] text-black font-semibold rounded-lg px-4 py-2 transition-colors"
								>
									<Lock className="w-4 h-4" /> Unlock
								</button>
							</form>
							</div>
						</>
					) : (
						<div>
							<div className="text-center mb-8">
								<h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">Unlocked: Vault</h2>
								{description && <p className="text-[var(--text-secondary)]">{description}</p>}
							</div>

							{loading ? (
								<div className="text-[var(--text-main)] text-center">Loading...</div>
							) : (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
									{items.map((item) => (
										<div
											key={item.id}
											className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-5 border border-gray-700/50 hover:border-[var(--primary)]/50 transition-all duration-300 hover:transform hover:scale-105"
										>
											<div className="flex items-start justify-between mb-2">
												<h3 className="text-lg font-bold text-[var(--text-main)]">{item.title}</h3>
												{item.badge && (
													<span className="text-xs text-[var(--text-secondary)] bg-gray-700/50 px-2 py-1 rounded-full">{item.badge}</span>
												)}
											</div>
											{item.description && (
												item.link ? (
													<button
														onClick={() => handleOpenLink(item.link)}
														className="inline-flex items-center gap-1 text-[var(--primary)] hover:opacity-90 mb-3"
													>
														<span>{item.description}</span>
													</button>
												) : (
													<p className="text-[var(--text-secondary)] mb-3">{item.description}</p>
												)
											)}
										</div>
									))}
								</div>
							)}
						</div>
					)}
				</div>
			</main>
		</div>
	);
};

export default Vault;


