export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: any;
}

export interface IButtonStyled {
    variant: string
}