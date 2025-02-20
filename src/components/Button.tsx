interface ButtonProps {
    onClick: () => void;
    count: number;
}

export default function Button(props: ButtonProps) {

    return (
        <button
            onClick={props.onClick}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-600"
        >
            count is {props.count}
        </button>
    )

}