// import React from 'react';
// import SendIcon from '@mui/icons-material/Send'; // MUI Send icon
// import './form.css';

// interface FormInput {
//   id: string;
//   type: string;
//   label: string;
//   placeholder: string;
// }

// const formInputs: FormInput[] = [
//   { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
//   {
//     id: 'tel',
//     type: 'tel',
//     label: 'Phone number',
//     placeholder: '+01 234 567 8900',
//   },
//   {
//     id: 'email',
//     type: 'email',
//     label: 'Email address',
//     placeholder: 'you@example.com',
//   },
//   {
//     id: 'message',
//     type: 'textarea',
//     label: 'Your message',
//     placeholder: 'How can we help you? Or you us?',
//   },
// ];

// const Form: React.FC = () => (
//   <form className="form">
//     <h2 className="form-h2">Send us a message</h2>

//     {formInputs.map((input) => (
//       <label key={input.id} htmlFor={input.id} className="form-label">
//         {input.label}

//         {input.type === 'textarea' ? (
//           <textarea
//             id={input.id}
//             className="form-textarea"
//             placeholder={input.placeholder}
//           />
//         ) : (
//           <input
//             id={input.id}
//             className="form-input"
//             type={input.type}
//             placeholder={input.placeholder}
//           />
//         )}
//       </label>
//     ))}

//     <button className="form-submit" type="submit">
//       <SendIcon className="form-submit-icon" />
//     </button>
//   </form>
// );

// export default Form;
import React from 'react'

import SendIcon from '@mui/icons-material/Send'

import './form.css'
import { Box } from '@mui/material'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => (
  <Box className="form" sx={{zIndex: 20, position: 'relative' }}>
    <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

   

    <button className="form-submit" type="submit">
      <SendIcon className="form-submit-icon" />
    </button>
  </Box>
)

export default Form