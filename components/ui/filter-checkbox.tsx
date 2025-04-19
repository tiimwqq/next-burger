import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
    name: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${String(value)} ${name}`}
            />
            <label htmlFor={`checkbox-${String(value)} ${name}`} className="leading-none cursor-pointer flex-1">
                {name}
            </label>
            {endAdornment}
        </div>
    );
};