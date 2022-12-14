import * as S from "./InputStyles";

const Input =
    ({ label, placeholder, textarea, name, onChange, type, accept, filename, required }) => {

        return (
            <S.Wrapper>
                {label && <label>{label}</label>}
                {textarea ? (
                    <S.TextArea onChange={onChange} name={name} placeholder={placeholder} required={required} />
                ) : (
                    <S.Input required={required} accept={accept} filename={filename} type={type} onChange={onChange} name={name} placeholder={placeholder} />
                )}
            </S.Wrapper>
        );
    }

export default Input;
