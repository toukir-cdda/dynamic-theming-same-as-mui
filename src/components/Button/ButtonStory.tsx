import HtmlEl from '../HtmlEl/HtmlEl';

const Button = (args: { tagName: 'button'; rest: any[] }) => {
  const { tagName, ...rest } = args;
  return <HtmlEl atom tagName="button" {...rest} />;
};

//////////////////////////// args for defabuttont value /////////////////////////////////////////
Button.args = {
  variant: 'contained',
  colorBg: 'primary',
  size: 'md',
  children: 'Button',
  rounded: 'md'
};
Button.argTypes = {
  variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  colorBg: {
    control: 'select',
    options: [
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
      'light',
      'dark',
      'white',
      'black',
      'gray',
      'muted',
      'transparent'
    ]
  },
  height: { control: 'text' },
  width: { control: 'text' },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl']
  },
  rounded: {
    control: 'select',
    options: [
      'rounded-none',
      'rounded-sm',
      'rounded-md',
      'rounded-lg',
      'rounded-xl',
      'rounded-full'
    ]
  },
  //chilren will be added in the HtmlEl component
  children: { control: 'text' }
};

export default Button;

// <HtmlEl atom tagName="div" className="flex flex-col w-[700px]">
//   <HtmlEl atom tagName="button" {...rest} />
//   {/* variant */}
//   <HtmlEl atom tagName="div" className="flex flex-col w-[700px]">
//     {' '}
//     <HtmlEl atom tagName="h5">Button Variants</HtmlEl>
//     <HtmlEl atom tagName="div" className="flex  gap-4">
//       <HtmlEl atom tagName="button" variant="text" colorBg="primary" size="md" rounded="md">
//         Text
//       </HtmlEl>
//       <HtmlEl atom tagName="button" variant="outlined" colorBg="primary" size="md" rounded="md">
//         Outlined
//       </HtmlEl>
//       <HtmlEl atom tagName="button" variant="contained" colorBg="primary" size="md" rounded="md">
//         Contained
//       </HtmlEl>
//     </HtmlEl>
//     {/* colorBg */}
//     <HtmlEl atom tagName="div">
//       <HtmlEl atom tagName="h5">Button Colors</HtmlEl>
//       <HtmlEl atom tagName="div" className="flex flex-wrap  gap-4">
//         <HtmlEl atom tagName="button" variant="contained" colorBg="primary" size="md" rounded="md">
//           Primary
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="secondary" size="md" rounded="md">
//           Secondary
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="success" size="md" rounded="md">
//           Success
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="warning" size="md" rounded="md">
//           Warning
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="danger" size="md" rounded="md">
//           Danger
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="info" size="md" rounded="md">
//           Info
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="light" size="md" rounded="md">
//           Light
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="dark" size="md" rounded="md">
//           Dark
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="white" size="md" rounded="md">
//           White
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="black" size="md" rounded="md">
//           Black
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="gray" size="md" rounded="md">
//           Gray
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="muted" size="md" rounded="md">
//           Muted
//         </HtmlEl>
//         <HtmlEl atom tagName="button" variant="contained" colorBg="transparent" size="md" rounded="md">
//           Transparent
//         </HtmlEl>
//       </HtmlEl>
//     </HtmlEl>
//   </HtmlEl>
// </HtmlEl>
