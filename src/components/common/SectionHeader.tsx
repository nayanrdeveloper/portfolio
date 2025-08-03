interface SectionHeaderProps {
    title: string;
    subtitle: string;
    align?: 'left' | 'center';
}

export const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
    const alignment = align === 'left' ? 'text-left' : 'text-center';
    return (
        <div className={`mb-8 ${alignment}`}>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                {subtitle}
            </p>
            <h2 className="text-foreground text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
    );
};
