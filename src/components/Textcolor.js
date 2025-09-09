export default function Textcolor({children, color}) {
    return (
        <strong
        style={{
            color: color
        }}>
        {children}
        </strong>
    );
}