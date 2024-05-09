const Faq = () => {
  return (
    <div className="my-12">
      <h1 className="text-4xl font-semibold text-center mx-auto">
        Frequently Asked Questions
      </h1>
      <p className="border-2 w-28 mt-6 rounded-xl border-cyan-800 text-center mx-auto"></p>
      <div className="space-y-4 mt-10 mx-36">
        <details className="w-full border rounded-lg" open="">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            How do I create an assignment on the platform?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            To create an assignment, log in to your account and navigate to the
            Create Assignment section. Fill out the required fields, including
            the assignment title, description, due date, and any additional
            instructions or resources. Once youve entered all the necessary
            information, click Submit to create the assignment. You can then
            share the assignment link with your friends or classmates to invite
            them to participate.
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            How do I complete an assignment?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            To complete an assignment, first, access the assignment through the
            link provided by your friend or classmate. Read the assignment
            instructions carefully and follow any guidelines or prompts
            provided. Depending on the type of assignment, you may need to
            submit a written response, upload a file, or complete an interactive
            task. Once youve finished the assignment, submit your work by the
            specified deadline.
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            Can I review my friends assignment submissions?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            Yes, you can review your friends assignment submissions if your
            friend has given you permission to do so. When your friend creates
            an assignment, they can choose to allow specific users to view and
            grade their submissions. If you have been granted access to review
            your friends assignments, you can provide feedback and assign a
            grade based on the criteria provided.
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            How do I grade my friends assignment?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            To grade your friends assignment, access the assignment through the
            link provided by your friend or classmate. Read the submission
            carefully and evaluate it based on the criteria outlined in the
            assignment instructions. Provide constructive feedback to help your
            friend improve their work, and assign a grade using the grading
            scale provided. Once youve completed the grading process, submit
            your feedback and grade to your friend.
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            What should I do if I have questions or encounter issues with an
            assignment?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            If you have questions or encounter issues with an assignment, dont
            hesitate to reach out to the assignment creator or the platforms
            support team for assistance. You can use the messaging feature to
            communicate directly with the assignment creator or contact the
            support team through the platforms help center. Be sure to provide
            details about the problem youre experiencing so that we can help you
            resolve it effectively.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
