import VerifyPageContent from './VerifyPageContent';

// Required for static export - certificate IDs are dynamic and generated at runtime
export function generateStaticParams() {
  // Return empty array since certificate IDs are generated dynamically
  // This route will be handled as a fallback/404 for unknown IDs
  return [];
}

export default function VerifyPage() {
  return <VerifyPageContent />;
}
