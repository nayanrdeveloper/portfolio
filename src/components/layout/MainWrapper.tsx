export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {children}
    </main>
  );
};
