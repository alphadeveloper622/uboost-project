const SingleFaq = (props: { question: string; answer: string }) => {
  const { question, answer } = props;

  return (
    <>


      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-primary">
          {question}
        </div>
        <div className="collapse-content">
          {answer}
        </div>
      </div>

    </>
  );
};

export default SingleFaq;
