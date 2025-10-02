# Regex Mulan Steps

1. Read the original screenplay text file.
2. Identify chunks of text separated by blank lines using regex.
   - Regex used: `\n\s*\n`
   - This matches one or more newlines with optional whitespace in between, effectively identifying paragraph breaks.
3. Wrap each identified chunk in `<sp>` tags.
4. Save the transformed content as a well-formed XML file.

### Example Transformation

#### Before:
```
Guard [yelling]: We're under attack! Light the signal!

[Guard runs to the tower and up the ladder...]
```

#### After:
```xml
<sp>Guard [yelling]: We're under attack! Light the signal!</sp>

<sp>[Guard runs to the tower and up the ladder...]</sp>
```


