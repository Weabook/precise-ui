import * as React from 'react';
import styled, { themed } from '../../utils/styled';
import { StandardProps } from '../../common';

export interface HighlightProps extends StandardProps {
  /**
   * String that needs to be rendered
   */
  text: string;
  /**
   * String that needs to be highlighted
   */
  highlight: string;
  /**
   * Defines if the search will be case insensitive
   */
  ignoreCase?: boolean;
}

const Highlighted = styled.span`
  background-color: ${themed(props => props.theme.highlightColor)};
`;

/**
 * Highlight component is meant to be a simple component to display text with highlighted search.
 * Component will render a SPAN or series of SPAN with the content and highlights
 */
export const Highlight: React.FC<HighlightProps> = ({ text, highlight, ignoreCase = true }) => {
  // Sanitized the user input to pevent them from using RegEx patterns
  const sanitized = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${sanitized})`, ignoreCase ? 'gi' : 'g'));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Highlighted key={i}>{part}</Highlighted>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
};

Highlight.displayName = 'Highlight';
