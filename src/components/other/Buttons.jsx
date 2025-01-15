export default function Buttons(props) {
    const { model, text } = props;

    return (
        <button className={model === 'primary' ? 'transition-all px-3 ml-3 text-pink-600 border-pink-600 border-2 rounded-lg hover:bg-pink-600 hover:text-white' : model === 'accent' ? 'transition-all px-3 ml-3 text-white bg-pink-600 border-pink-600 border-2 rounded-lg hover:bg-white hover:text-pink-600 ' : 'default'}>
            {text}
        </button>
    );
}
