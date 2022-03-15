import inputStyle from './input.module.css';

export default function Input({handleChange, handleSend, inputValue}) {

    return (<div className={inputStyle.inputBox}>
            <input
                type = 'text'
                placeholder='Enter Message Here...'
                value={inputValue}
                className={inputStyle.input}
                onChange={handleChange}
            />
            <button
                onClick={handleSend}
                type='button'
                className={inputStyle.button}
            >ENTER</button>
    </div>);
}
