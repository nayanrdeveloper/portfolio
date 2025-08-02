interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) => {
  const alignment = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`mb-8 ${alignment}`}>
      <p className="text-sm uppercase text-primary tracking-wider font-semibold">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
    </div>
  );
};
