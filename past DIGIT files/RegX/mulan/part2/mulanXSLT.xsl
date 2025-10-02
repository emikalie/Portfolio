<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="3.0">
    
    <!-- Identity transformation -->
    <xsl:mode on-no-match="shallow-copy"/>
    
    <!-- Analyze and tag speaker names before their speeches -->
    <xsl:template match="text()">
        <xsl:analyze-string select="." regex="^([A-Za-z\s-]+)(?:\s*\[.*?\])?\s*:"> 
            <xsl:matching-substring>
                <speaker><xsl:value-of select="regex-group(1)"/></speaker>
            </xsl:matching-substring>
            <xsl:non-matching-substring>
                <xsl:value-of select="."/>
            </xsl:non-matching-substring>
        </xsl:analyze-string>
    </xsl:template>
    
    <!-- Convert empty <sp> elements into <stageDir> elements -->
    <xsl:template match="sp[not(speech)]">
        <stageDir>
            <xsl:apply-templates/>
        </stageDir>
    </xsl:template>
    
</xsl:stylesheet>

