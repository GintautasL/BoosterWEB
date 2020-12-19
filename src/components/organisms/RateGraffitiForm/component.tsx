import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { getError } from '../../../utils'
import { color } from '../../../theme'
import { CreateGraffitiState } from '../../../store/graffities/types'

interface CreateRatingFormProps {
  createRating: CreateGraffitiState,
}

export const CreateRatingFormComponent: React.FunctionComponent<
CreateRatingFormProps
> = ({ createRating }) => {
  return (
    <div className="create-rating-form-wrapper">
      <Form className="create-graffiti-form">
        <FormField type="starRating" name="rating" />
        <FormField type="textarea" name="comment" label="Comment" />
        <div className="button-wrapper">
          <Button type="submit"> Rate </Button>
        </div>
        <div className="error-wrapper">
          <ErrorMessage>{getError(createRating.errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .create-rating-form-wrapper {
            width: 100%;
            border-radius: 8px;
            height: max-content;
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
