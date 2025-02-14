import sprite from "../../assents/images/icons-sprite.svg";
type PropsType = {
    height?: string
    width?: string
    iconId: string
    viewBox?: string
}
export const Icon = (props: PropsType) => {
    return (
        <svg transform={"none"} height={props.height} width={ props.width} viewBox={props.viewBox || "0 0 55 55"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.iconId}`} />
        </svg>
    );
};

