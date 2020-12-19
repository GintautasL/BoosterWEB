import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { getError } from '../../../utils'
import { color } from '../../../theme'
import { CreateGraffitiState } from '../../../store/graffities/types'

interface CreateGraffitiFormProps {
  graffiti: CreateGraffitiState,
}

export const CreateGraffitiFormComponent: React.FunctionComponent<
  CreateGraffitiFormProps
> = ({ graffiti }) => {
  return (
    <div className="create-graffiti-form-wrapper">
      <h1>Create graffiti</h1>
      <Form className="create-graffiti-form">
        <FormField name="position" label="Position" type="googleMaps"/>
        <FormField name="name" label="Name" />
        <FormField type="textarea" name="description" label="Description" />
        <FormField type="dropzoneWithGallery" name="uploads" label="Photo" />
        <div className="button-wrapper">
          <Button type="submit"> Create </Button>
        </div>
        <div className="error-wrapper">
          <ErrorMessage>{getError(graffiti.errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .create-graffiti-form-wrapper {
            max-width: 500px;
            width: 100%;
            border-radius: 8px;
            background-image: linear-gradient(
              to bottom right,
              ${color('grey', 600)},
              ${color('grey', 800)}
            );
            height: max-content;
            box-shadow: 20px 20px 40px black;
            padding: 40px;
            margin-bottom: auto;
            margin-top: auto;
          }
          .button-wrapper {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }
          .error-wrapper {
            text-align: center;
            width: 100%;
            margin-top: 10px;
          }
          h1 {
            text-align: center;
            color: ${color('grey', 200)};
          }
        `}
      </style>
    </div>
  )
}
