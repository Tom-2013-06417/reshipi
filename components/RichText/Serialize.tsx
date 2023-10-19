import { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import { LargeBody } from '../LargeBody/LargeBody';
import { Node } from './types';
import { RichTextUpload } from './RichTextUpload';

interface Props {
  content?: Node[];
}

export const Serialize: React.FC<Props> = ({ content }) => (
  <>
    {content?.map((node, i) => {
      if (!node) {
        return null;
      }

      if (Text.isText(node)) {
        let text = (
          <span
            dangerouslySetInnerHTML={{
              __html: escapeHTML(node.text),
            }}
          ></span>
        );

        if (node.bold) {
          text = <strong key={i}>{text}</strong>;
        }

        if (node.code) {
          text = <code key={i}>{text}</code>;
        }

        if (node.italic) {
          text = <em key={i}>{text}</em>;
        }

        if (node.underline) {
          text = (
            <span className="underline" key={i}>
              {text}
            </span>
          );
        }

        if (node.strikethrough) {
          text = (
            <span className="line-through" key={i}>
              {text}
            </span>
          );
        }

        return <Fragment key={i}>{text}</Fragment>;
      }

      switch (node.type) {
        case 'br':
          return <br key={i} />;

        case 'h1':
          return (
            <h1 className="mb-4" key={i}>
              <Serialize content={node.children} />
            </h1>
          );

        case 'h2':
          return (
            <h2 className="mb-4" key={i}>
              <Serialize content={node.children} />
            </h2>
          );

        case 'h3':
          return (
            <h3 className="mb-4" key={i}>
              <Serialize content={node.children} />
            </h3>
          );

        case 'h4':
          return (
            <h4 className="mb-4" key={i}>
              <Serialize content={node.children} />
            </h4>
          );

        case 'h5':
          return (
            <h5 className="mb-4" key={i}>
              <Serialize content={node.children} />
            </h5>
          );

        case 'h6':
          return (
            <h6 className="mb-4" key={i}>
              <Serialize content={node.children} />
            </h6>
          );

        case 'quote':
          return (
            <blockquote key={i}>
              <Serialize content={node.children} />
            </blockquote>
          );

        case 'ul':
          return (
            <ul key={i}>
              <Serialize content={node.children} />
            </ul>
          );

        case 'ol':
          return (
            <ol key={i}>
              <Serialize content={node.children} />
            </ol>
          );

        case 'li':
          return (
            <li key={i}>
              <Serialize content={node.children} />
            </li>
          );

        case 'large-body': {
          return (
            <LargeBody key={i}>
              <Serialize content={node.children} />
            </LargeBody>
          );
        }

        // case 'link':
        //   return (
        //     <CMSLink
        //       key={i}
        //       type={node.linkType === 'internal' ? 'reference' : 'custom'}
        //       url={node.url}
        //       reference={node.doc as Reference}
        //       newTab={node?.newTab}
        //     >
        //       <Serialize
        //         content={node.children}
        //
        //       />
        //     </CMSLink>
        //   );

        case 'upload': {
          return <RichTextUpload className="mb-4" key={i} node={node} />;
        }

        // case 'label':
        //   return (
        //     <Label key={i}>
        //       <Serialize
        //         content={node.children}
        //
        //       />
        //     </Label>
        //   );

        // case 'video': {
        //   const { source, id: videoID } = node;

        //   if (source === 'vimeo' || source === 'youtube') {
        //     return <Video key={i} platform={source} id={videoID as string} />;
        //   }

        //   return null;
        // }

        default:
          return (
            <p className="mb-4" key={i}>
              <Serialize content={node.children} />
            </p>
          );
      }
    })}
  </>
);
