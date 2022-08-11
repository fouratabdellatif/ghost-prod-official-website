import * as S from "./InputStyles";

const Input =
    ({ label, placeholder, textarea, name, onChange, type, accept, filename }) => {

        return (
            <S.Wrapper>
                {label && <label>{label}</label>}
                {textarea ? (
                    <S.TextArea onChange={onChange} name={name} placeholder={placeholder} />
                ) : (
                    <S.Input accept={accept} filename={filename} type={type} onChange={onChange} name={name} placeholder={placeholder} />
                )}
            </S.Wrapper>
        );
    }

export default Input;
