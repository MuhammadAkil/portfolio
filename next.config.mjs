/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set your base path relative to the repository
    basePath: '/MuhammadAkil/portfolio',
    assetPrefix: '/MuhammadAkil/portfolio/',
    
    // Function to map paths for static export
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Define other paths if needed
      }
    },
  };
  
  export default nextConfig;
  