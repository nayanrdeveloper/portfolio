import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '../ui/label';

interface InputWithLabelProps
    extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    id: string;
    type?: string;
}

export const InputWithLabel = ({
    label,
    id,
    type = 'text',
    className,
    ...props
}: InputWithLabelProps) => {
    return (
        <div className="w-full space-y-1">
            <Label htmlFor={id} className="mb-2">
                {label}
            </Label>

            {type === 'textarea' ? (
                <Textarea
                    id={id}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    className={`custom-input ${className ?? ''}`}
                />
            ) : (
                <Input
                    id={id}
                    type={type}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                    className={`custom-input ${className ?? ''}`}
                />
            )}
        </div>
    );
};
