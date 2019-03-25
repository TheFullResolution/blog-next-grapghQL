import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Field } from 'react-final-form';

const CREATE_BLOG_POST_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION($title: String!, $body: String!) {
    createBlogPost(title: $title, body: $body) {
      id
    }
  }
`;

export const CreateBlogPost = () => (
  <Mutation mutation={CREATE_BLOG_POST_MUTATION}>
    {(createBlogPost) => {
      const onSubmit = async (values: any) => {
        await createBlogPost({
          variables: {
            title: values.title,
            body: values.body
          }
        });
      };
      return (
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title</label>
                <Field
                  name="title"
                  component="input"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <label>Body</label>
                <Field
                  name="body"
                  component="textarea"
                  type="text"
                  placeholder="Body"
                />
              </div>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </form>
          )}
        </Form>
      );
    }}
  </Mutation>
);
