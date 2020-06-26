import React, { useContext } from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import { Form } from "grommet"
import Recaptcha from "react-recaptcha"

import useForm from "../hooks/useForm"
import { StyledGrommet, StyledInput, Btn } from "./styles/StyledDownloadForm"
import { FormAuthContext } from "../context/FormAuthContext"

const myTheme = {
  global: {
    colors: {
      brand: "#497638",
    },
    focus: {
      border: {
        color: "#FCD199",
      },
    },
  },
}

const CREATE_ITEM = gql`
  mutation Create_item($item_name: String!, $column_values: JSON!) {
    create_item(
      board_id: 616763188
      group_id: "topics"
      item_name: $item_name
      column_values: $column_values
    ) {
      id
    }
  }
`

const DownloadForm = ({ usState }) => {
  const { success, setSuccess, setFormAuth } = useContext(FormAuthContext)

  const { inputs, handleChange, resetForm } = useForm({
    fullName: "",
    email: "",
  })

  const formatDateToISO = () => {
    let t = new Date()
    let z = t.getTimezoneOffset() * 60 * 1000
    let tLocal = t - z
    let tLocalDate = new Date(tLocal)
    let iso = tLocalDate.toISOString()
    return iso
  }

  const [createItem, { error, loading }] = useMutation(CREATE_ITEM, {
    variables: {
      item_name: inputs.fullName,
      column_values: JSON.stringify({
        date: {
          date: formatDateToISO().split("T")[0],
          changed_at: formatDateToISO(),
        },
        email0: {
          email: inputs.email,
          text: inputs.email,
          changed_at: formatDateToISO(),
        },
        text: usState,
      }),
    },
  })

  // Submits Monday's createItem mutation using Apollo's useMutation
  const submitForm = async () => {
    try {
      const res = await createItem()
      console.log(res)
      if (!error) {
        resetForm()
        setSuccess(true)
        console.log("success =>", success)
        setFormAuth(true)
      } else {
        setSuccess(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // create a variable to store the component instance
  let recaptchaInstance

  // manually trigger reCAPTCHA execution
  const executeCaptcha = function() {
    recaptchaInstance.execute()
  }

  // executed once the captcha has been verified
  // can be used to post forms, redirect, etc.
  const verifyCallback = function(response) {
    submitForm()
  }

  return (
    <StyledGrommet theme={myTheme}>
      <Form disabled={loading} aria-busy={loading}>
        <label htmlFor="full-name" name="full-name">
          Full Name
        </label>
        <StyledInput
          id="full-name"
          name="fullName"
          placeholder="Mary Jane"
          value={inputs.fullName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" name="email">
          Email
        </label>
        <StyledInput
          id="email"
          name="email"
          type="email"
          placeholder="sales@thclabelsolutions.com"
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <Btn
          label="Submit"
          onClick={executeCaptcha}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 200, damping: 300 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 200, damping: 300 },
          }}
        >
          Submit
        </Btn>
        <small>*By submitting this form, you agree to receive marketing emails to the address provided above. No purchase necessary. To unsubscribe, click the unsubscribe link at the button of the email.</small>
        <Recaptcha
          ref={e => (recaptchaInstance = e)}
          sitekey="6LcECKkZAAAAAEQc1pFLriwO5RvQKvXWBjTfdUpQ"
          size="invisible"
          verifyCallback={verifyCallback}
        />
      </Form>
    </StyledGrommet>
  )
}

export default DownloadForm
