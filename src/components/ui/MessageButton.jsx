import messageButton from '../../assets/buttons/message.svg'


export default function MessageButton({
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="
                rounded-full
                p-2
                transition
                hover:bg-gray-100
            "
        >
                    <img src={messageButton} alt="" />

        </button>

    );
}