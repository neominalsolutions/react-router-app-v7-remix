import type { Config } from '@react-router/dev/config';

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	async prerender() {
		// SSG Static Site Generation özelliği
		// sayfada sürekli değişen dinamik bir değer yoksa ön yükleyi build alırken yapar ve bu ön yükleme sayesinde ilgili sayfalar sunucundan daha hızlı döner.
		// eğer sunucunda gelen veri bir request sonucunda oluşacak bir sayfa ise ssr özelliğini kullanır.
		return ['about'];
	},
} satisfies Config;
