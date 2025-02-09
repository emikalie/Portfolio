Step 1: Remove Unnecessary Text

Deleted the Project Gutenberg headers and footers to isolate the sonnets.

Removed text before START OF THIS PROJECT GUTENBERG EBOOK SHAKESPEARE'S SONNETS and after  END OF THIS PROJECT GUTENBERG EBOOK SHAKESPEARE'S SONNETS.

Step 2: Identify and Process Each Sonnet

Used regex to detect Roman numerals indicating sonnet numbers.

Started a new <sonnet> element for each detected numeral and assigned it a number attribute.

Step 3: Tag Each Line

Wrapped each line of poetry inside <line> tags using regex.

Ensured that only non-empty lines were tagged.

Step 4: Close Sonnet Tags

After processing all lines of a sonnet, inserted a closing </sonnet> tag before the next sonnet began.

Step 5: Wrap in Root XML Element

Enclosed all <sonnet> elements within a root <xml> element