export default (text: string) => {
  while (new RegExp('[ãáâàíéêóôúû]', 'ig').test(text)) {
    text = text.replace(new RegExp('[ãáâà]', 'g'), 'a');
    text = text.replace(new RegExp('[ÃÁÂÀ]', 'g'), 'A');
    text = text.replace(new RegExp('[éê]', 'g'), 'e');
    text = text.replace(new RegExp('[ÉÊ]', 'g'), 'E');
    text = text.replace(new RegExp('[í]', 'g'), 'i');
    text = text.replace(new RegExp('[Í]', 'g'), 'I');
    text = text.replace(new RegExp('[óô]', 'g'), 'o');
    text = text.replace(new RegExp('[ÓÔ]', 'g'), 'O');
    text = text.replace(new RegExp('[úû]', 'g'), 'u');
    text = text.replace(new RegExp('[ÚÛ]', 'g'), 'U');
  }

  return text;
};
