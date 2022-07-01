import * as S from "./InputStyles";

const Input =
    ({ label, placeholder, textarea, name, onChange }) => {

        return (
            <S.Wrapper>
                {label && <label>{label}</label>}
                {textarea ? (
                    <S.TextArea onChange={onChange} name={name} placeholder={placeholder} />
                ) : (
                    <S.Input onChange={onChange} name={name} placeholder={placeholder} />
                )}
            </S.Wrapper>
        );
    }

export default Input;
