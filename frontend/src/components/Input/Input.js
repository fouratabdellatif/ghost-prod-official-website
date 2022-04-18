import * as S from "./InputStyles";

const Input =
    ({ label, placeholder, textarea }) => {

        return (
            <S.Wrapper>
                {label && <label>{label}</label>}
                {textarea ? (
                    <S.TextArea placeholder={placeholder} />
                ):(
                    <S.Input placeholder={placeholder} />
                )}
            </S.Wrapper>
        );
    }

export default Input;
