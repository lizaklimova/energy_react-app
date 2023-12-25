import { subscribe } from 'services/exercises-api';
import { SubscrForm, SubFormTitle, SubInput, SubBtn } from './SubForm.styled';

const SubForm = () => {
  const subscribeHandler = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.subscription.value;
    const data = {
      email,
    };
    subscribe(data);

    e.currentTarget.reset();
  };

  return (
    <SubscrForm onSubmit={subscribeHandler}>
      <SubFormTitle>Subscribe and learn about new exercises!</SubFormTitle>
      <div>
        <SubInput
          id="subscription"
          type="email"
          name="subscription"
          autoComplete="off"
          placeholder="Email"
          required
        />

        <SubBtn type="submit">Send</SubBtn>
      </div>
    </SubscrForm>
  );
};

export default SubForm;
