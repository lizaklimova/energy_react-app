import {
  SubscrForm,
  SubFormTitle,
  SubInputWrap,
  SubInput,
  SubLabel,
  SubBtn,
} from './SubForm.styled';

const SubForm = () => {
  return (
    <SubscrForm>
      <SubFormTitle>Subscribe and learn about new exercises!</SubFormTitle>
      <div>
        <SubInputWrap>
          <SubInput id="subscription" type="text" autoComplete="off" />
          <SubLabel>Email</SubLabel>
        </SubInputWrap>
        <SubBtn type="submit">Send</SubBtn>
      </div>
    </SubscrForm>
  );
};

export default SubForm;
