<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:output method="html" doctype-system="about:legacy-compat" encoding="UTF-8" 
    indent="yes" omit-xml-declaration="yes"></xsl:output>
    <xsl:template match="/">
        <html>
            <head>
                <title>My recipies library</title>
                <link rel="stylesheet" href="recipies.css" />
            </head>
            <body>
                <h2>Recipies library</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Preparation time</th>
                        <th>Cooking time</th>
                        <th>Difficulty</th>
                        <th>Serves</th>
                        <th>Description</th>
                        <th>Ingredients</th>
                        <th>Nutrition</th>
                        <th>Vegetarian</th>
                        <th>Cooking type</th>
                    </tr>
                    <xsl:for-each select="//recipe">
                        <xsl:sort select="cook_time"/>
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td id = "t1"><xsl:value-of select="prep_time"/></td>
                            <td id = "t2"><xsl:value-of select="cook_time"/></td>
                            <td><xsl:value-of select="difficulty"/></td>
                            <td><xsl:value-of select="serves"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:for-each select="ingredients/ingredient">
                                <ul>
                                    <li>
                                        <xsl:value-of select="self::node()"/>
                                    </li>
                                </ul>
                                </xsl:for-each>
                            </td>
                            <td><xsl:for-each select="nutrition">
                                <ul>
                                    <li><xsl:value-of select="kcal"/></li>
                                    <li><xsl:value-of select="fat"/></li>
                                    <li><xsl:value-of select="sat"/></li>
                                    <li><xsl:value-of select="carbs"/></li>
                                    <li><xsl:value-of select="sugars"/></li>
                                    <li><xsl:value-of select="fibre"/></li>
                                    <li><xsl:value-of select="protein"/></li>
                                    <li><xsl:value-of select="salt"/></li>
                                </ul>
                                </xsl:for-each>
                            </td>
                            <td><xsl:value-of select="vegetarian"/></td>
                            <xsl:if test="cook_time &lt; 30"><td>Quick and Easy</td></xsl:if>
                            <xsl:if test="cook_time &gt; 60"><td>Slow Burner</td></xsl:if>
                            <xsl:if test="cook_time &gt; 30 and cook_time &lt; 60"><td>Medium Burner</td></xsl:if>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>    
        </html>
    </xsl:template>     
</xsl:stylesheet>