export const parseGenerationResponse = (responseText) => {
  let code = '';
  let description = '';

  const htmlMarker = '```html';
  const startIndex = responseText.indexOf(htmlMarker);

  if (startIndex !== -1) {
    description = responseText.slice(0, startIndex).trim();

    const codeStart = startIndex + htmlMarker.length;
    const endIndex = responseText.indexOf('```', codeStart);

    if (endIndex !== -1) {
      code = responseText.slice(codeStart, endIndex).trim();
    }
  } else {
    const genericMarker = '```';
    const genericStart = responseText.indexOf(genericMarker);

    if (genericStart !== -1) {
      description = responseText.slice(0, genericStart).trim();
      const genericCodeStart = genericStart + genericMarker.length;
      const genericEnd = responseText.indexOf('```', genericCodeStart);

      if (genericEnd !== -1) {
        code = responseText.slice(genericCodeStart, genericEnd).trim();
      }
    } else {
      description = responseText.trim();
    }
  }

  return { description, code };
};