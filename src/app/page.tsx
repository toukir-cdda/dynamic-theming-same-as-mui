/* eslint-disable react/no-children-prop */
'use client';
import HtmlEl from '@/stories/Atoms/HtmlEl/HtmlEl';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  text: yup.string().required('Text is required')
});

const generateHtmlElements = (elements: any) => {
  return elements?.map((el: any, index: number) => {
    const { children } = el || {};
    return (
      <HtmlEl atom key={index} tagName={el.tagName}>
        {typeof children === 'object' ? generateHtmlElements(children) : children}
        <HtmlEl atom tagName="div" />
      </HtmlEl>
    );
  });
};

export default function Home() {
  const formik = useFormik({
    initialValues: {
      text: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('submit', values);
    }
  });

  return (
    <>
      <HtmlEl atom tagName="div" id="form-container">
        <HtmlEl atom tagName="form" id="form" onSubmit={formik.handleSubmit}>
          <HtmlEl atom tagName="div" id="text-input-container" className="flex flex-col">
            <HtmlEl atom tagName="label" children="label for input" />
            <HtmlEl atom
              tagName="input"
              type="text"
              id="text-input"
              name="text"
              className="border-2"
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.text && formik.errors.text ? (
              <HtmlEl atom
                tagName="p"
                id="text-error"
                className="text-red-500"
                children={formik.errors.text}
              />
            ) : null}
          </HtmlEl>
          <HtmlEl atom
            tagName="input"
            type="radio"
            value="male"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <HtmlEl atom
            tagName="input"
            type="radio"
            value="female"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <HtmlEl atom
            tagName="input"
            type="radio"
            value="other"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <HtmlEl atom tagName="button" id="submit-button" type="submit" children="Submit" />
        </HtmlEl>
      </HtmlEl>
    </>
  );

  // return generateHtmlElements(formData)
}

// interface Style {
//   [key: string]: string;
// }

// interface Data {
//   tagName: string;
//   attributes: Attributes;
//   selfClosing: boolean;
//   innerHTML: string;
//   style: Style;
// }

// // Example usage
// const data: Data = {
//   tagName: "div",
//   attributes: {
//     className: ["example", "example2"],
//     id: ["uniqueID", "uniqueID2"],
//   },
//   selfClosing: false,
//   innerHTML: "This is a dynamic HTML tag atom.",
//   style: {
//     color: "red",
//     fontSize: "16px",
//   },
// };

// const DynamicAtom = () => <DynamicTag data={data} />;

// export default DynamicAtom;
