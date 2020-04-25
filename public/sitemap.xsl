<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
        version="1.0"
        xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:fo="http://www.w3.org/1999/XSL/Format"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns="http://www.w3.org/1999/xhtml">

    <xsl:output method="html" indent="yes" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>
                    Sitemap
                    <xsl:if test="sm:sitemapindex">Index</xsl:if>
                </title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            </head>
            <body>
            <div class="container">
                <div class="jumbotron bg-cover text-white" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(logo512.jpg)">
                    <h2 class="display-4">
                        Sitemap
                        <xsl:if test="sm:sitemapindex">Index</xsl:if>
                        <xsl:if test="sm:urlset/sm:url/mobile:mobile">
                            <span>Mobile</span>
                        </xsl:if>
                        <xsl:if test="sm:urlset/sm:url/image:image">
                            <span>Images</span>
                        </xsl:if>
                        <xsl:if test="sm:urlset/sm:url/news:news">
                            <span>News</span>
                        </xsl:if>
                        <xsl:if test="sm:urlset/sm:url/video:video">
                            <span>Video</span>
                        </xsl:if>
                        <xsl:if test="sm:urlset/sm:url/xhtml:link">
                            <span>Xhtml</span>
                        </xsl:if>
                     </h2>
                        <p class="lead">
                            <xsl:choose>
                                <xsl:when test="sm:sitemapindex">
                                    This XML Sitemap Index file contains
                                    <xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/>
                                    sitemaps.
                                </xsl:when>
                                <xsl:otherwise>
                                    This XML Sitemap contains
                                    <xsl:value-of select="count(sm:urlset/sm:url)"/>
                                    URLs.
                                </xsl:otherwise>
                            </xsl:choose>
                        </p>
                    </div>
                    <xsl:apply-templates/>
            </div>
            </body>
        </html>
    </xsl:template>


    <xsl:template match="sm:sitemapindex">
        <table>
            <tr>
                <th></th>
                <th>URL</th>
                <th>Last Modified</th>
            </tr>
            <xsl:for-each select="sm:sitemap">
                <tr>
                    <xsl:variable name="loc">
                        <xsl:value-of select="sm:loc"/>
                    </xsl:variable>
                    <xsl:variable name="pno">
                        <xsl:value-of select="position()"/>
                    </xsl:variable>
                    <td>
                        <xsl:value-of select="$pno"/>
                    </td>
                    <td>
                        <a href="{$loc}">
                            <xsl:value-of select="sm:loc"/>
                        </a>
                    </td>
                    <xsl:apply-templates/>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>

    <xsl:template match="sm:urlset">
        <table class="table table-dark">
            <tr>
                <th></th>
                <th>URL</th>
                <xsl:if test="sm:url/sm:lastmod">
                    <th>Last Modified</th>
                </xsl:if>
                <xsl:if test="sm:url/sm:changefreq">
                    <th>Change Frequency</th>
                </xsl:if>
                <xsl:if test="sm:url/sm:priority">
                    <th>Priority</th>
                </xsl:if>
            </tr>
            <xsl:for-each select="sm:url">
                <tr>
                    <xsl:variable name="loc">
                        <xsl:value-of select="sm:loc"/>
                    </xsl:variable>
                    <xsl:variable name="pno">
                        <xsl:value-of select="position()"/>
                    </xsl:variable>
                    <td>
                        <xsl:value-of select="$pno"/>
                    </td>
                    <td>
                        <p>
                            <a href="{$loc}" class="text-white">
                                <xsl:value-of select="sm:loc"/>
                            </a>
                        </p>
                        <xsl:apply-templates select="xhtml:*"/>
                        <xsl:apply-templates select="image:*"/>
                        <xsl:apply-templates select="video:*"/>
                    </td>
                    <xsl:apply-templates select="sm:*"/>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>

    <xsl:template match="sm:loc|image:loc|image:caption|video:*">
    </xsl:template>

    <xsl:template match="sm:lastmod|sm:changefreq|sm:priority">
        <td>
            <xsl:apply-templates/>
        </td>
    </xsl:template>

    <xsl:template match="xhtml:link">
        <xsl:variable name="altloc">
            <xsl:value-of select="@href"/>
        </xsl:variable>
        <p>
            Xhtml:
            <a href="{$altloc}">
                <xsl:value-of select="@href"/>
            </a>
            <span>
                <xsl:value-of select="@hreflang"/>
            </span>
            <span>
                <xsl:value-of select="@rel"/>
            </span>
            <span>
                <xsl:value-of select="@media"/>
            </span>
        </p>
        <xsl:apply-templates/>
    </xsl:template>
    <xsl:template match="image:image">
        <xsl:variable name="loc">
            <xsl:value-of select="image:loc"/>
        </xsl:variable>
        <p>
            Image:
            <a href="{$loc}">
                <xsl:value-of select="image:loc"/>
            </a>
            <span>
                <xsl:value-of select="image:caption"/>
            </span>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    <xsl:template match="video:video">
        <xsl:variable name="loc">
            <xsl:choose>
                <xsl:when test="video:player_loc != ''">
                    <xsl:value-of select="video:player_loc"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="video:content_loc"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <p>
            Video:
            <a href="{$loc}">
                <xsl:choose>
                    <xsl:when test="video:player_loc != ''">
                        <xsl:value-of select="video:player_loc"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="video:content_loc"/>
                    </xsl:otherwise>
                </xsl:choose>
            </a>
            <span>
                <xsl:value-of select="video:title"/>
            </span>
            <span>
                <xsl:value-of select="video:thumbnail_loc"/>
            </span>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
</xsl:stylesheet>