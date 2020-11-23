export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Raw JSON value */
  Json: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  Hex: any;
};

export enum ImageTextOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** A connection to a list of items. */
export type IntroSectionConnection = {
  __typename?: 'IntroSectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<IntroSectionEdge>;
  aggregate: Aggregate;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type PageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type ProjectUpsertLocalizationInput = {
  update: ProjectUpdateLocalizationDataInput;
  create: ProjectCreateLocalizationDataInput;
  locale: Locale;
};

/** Project Category for Project */
export type ProjectCategory = Node & {
  __typename?: 'ProjectCategory';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ProjectCategory>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  projects: Array<Project>;
  /** List of ProjectCategory versions */
  history: Array<Version>;
};


/** Project Category for Project */
export type ProjectCategoryDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Project Category for Project */
export type ProjectCategoryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Project Category for Project */
export type ProjectCategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type ImageTextUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<ImageTextUpdateManyLocalizationInput>>;
};

export type ProjectUpdateManyLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type ProjectCategoryEdge = {
  __typename?: 'ProjectCategoryEdge';
  /** The item at the end of the edge. */
  node: ProjectCategory;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ProjectCategoryCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectCategory documents */
  create?: Maybe<Array<ProjectCategoryCreateInput>>;
  /** Connect multiple existing ProjectCategory documents */
  connect?: Maybe<Array<ProjectCategoryWhereUniqueInput>>;
};

export type UrlUpdateManyInlineInput = {
  /** Create and connect multiple Url documents */
  create?: Maybe<Array<UrlCreateInput>>;
  /** Connect multiple existing Url documents */
  connect?: Maybe<Array<UrlConnectInput>>;
  /** Override currently-connected documents with multiple existing Url documents */
  set?: Maybe<Array<UrlWhereUniqueInput>>;
  /** Update multiple Url documents */
  update?: Maybe<Array<UrlUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Url documents */
  upsert?: Maybe<Array<UrlUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Url documents */
  disconnect?: Maybe<Array<UrlWhereUniqueInput>>;
  /** Delete multiple Url documents */
  delete?: Maybe<Array<UrlWhereUniqueInput>>;
};

export type ImageTextUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<ImageTextUpdateManyLocalizationsInput>;
};

export type ProjectUpdateInput = {
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  featureImage?: Maybe<AssetUpdateOneInlineInput>;
  projectCategory?: Maybe<ProjectCategoryUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<ProjectUpdateLocalizationsInput>;
};

/** References ImageText record uniquely */
export type ImageTextWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProjectCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
};

/** References ProjectCategory record uniquely */
export type ProjectCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type ProjectCreateLocalizationInput = {
  /** Localization input */
  data: ProjectCreateLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  opengraphPublishedTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  opengraphPublishedTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  opengraphPublishedTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  opengraphPublishedTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  opengraphPublishedTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  opengraphPublishedTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  opengraphPublishedTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  opengraphPublishedTime_gte?: Maybe<Scalars['DateTime']>;
  opengraphModifiedTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  opengraphModifiedTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  opengraphModifiedTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  opengraphModifiedTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  opengraphModifiedTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  opengraphModifiedTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  opengraphModifiedTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  opengraphModifiedTime_gte?: Maybe<Scalars['DateTime']>;
  opengraphAuthor?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  opengraphAuthor_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  opengraphAuthor_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  opengraphAuthor_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  opengraphAuthor_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  opengraphAuthor_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  opengraphAuthor_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  opengraphAuthor_gte?: Maybe<Scalars['DateTime']>;
  canonical?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  canonical_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  canonical_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  canonical_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  canonical_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  canonical_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  canonical_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  canonical_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  canonical_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  canonical_not_ends_with?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
};

/** References Seo record uniquely */
export type SeoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SeoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<SeoUpdateManyLocalizationInput>>;
};

/** Identifies documents */
export type UrlManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UrlWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UrlWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UrlWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  page?: Maybe<PageWhereInput>;
};

/** References Url record uniquely */
export type UrlWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type UrlUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UrlWhereUniqueInput;
  /** Upsert data */
  data: UrlUpsertInput;
};


export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** An edge in a connection. */
export type ImageTextEdge = {
  __typename?: 'ImageTextEdge';
  /** The item at the end of the edge. */
  node: ImageText;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type IntroSectionUpdateInput = {
  /** smallParagraph input for default locale (en) */
  smallParagraph?: Maybe<Scalars['String']>;
  /** bigBoldParagraph input for default locale (en) */
  bigBoldParagraph?: Maybe<Scalars['String']>;
  /** bigParagraph input for default locale (en) */
  bigParagraph?: Maybe<Scalars['String']>;
  /** briefDescription input for default locale (en) */
  briefDescription?: Maybe<Scalars['String']>;
  page?: Maybe<PageUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<IntroSectionUpdateLocalizationsInput>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type IntroSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: IntroSectionWhereInput;
  /** Update many input */
  data: IntroSectionUpdateManyInput;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

export type ProjectConnectInput = {
  /** Document to connect */
  where: ProjectWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type SeoUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** focuskw input for default locale (en) */
  focuskw?: Maybe<Scalars['String']>;
  /** opengraphUrl input for default locale (en) */
  opengraphUrl?: Maybe<Scalars['String']>;
  /** opengraphType input for default locale (en) */
  opengraphType?: Maybe<Scalars['String']>;
  /** opengraphTitle input for default locale (en) */
  opengraphTitle?: Maybe<Scalars['String']>;
  /** opengraphSiteName input for default locale (en) */
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** opengraphPublisher input for default locale (en) */
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** opengraphDescription input for default locale (en) */
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['DateTime']>;
  opengraphModifiedTime?: Maybe<Scalars['DateTime']>;
  opengraphAuthor?: Maybe<Scalars['DateTime']>;
  canonical?: Maybe<Scalars['String']>;
  /** twitterDescription input for default locale (en) */
  twitterDescription?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<SeoUpdateManyLocalizationsInput>;
};

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type IntroSectionCreateManyInlineInput = {
  /** Create and connect multiple existing IntroSection documents */
  create?: Maybe<Array<IntroSectionCreateInput>>;
  /** Connect multiple existing IntroSection documents */
  connect?: Maybe<Array<IntroSectionWhereUniqueInput>>;
};

export type UrlCreateManyInlineInput = {
  /** Create and connect multiple existing Url documents */
  create?: Maybe<Array<UrlCreateInput>>;
  /** Connect multiple existing Url documents */
  connect?: Maybe<Array<UrlWhereUniqueInput>>;
};

/** Identifies documents */
export type ImageTextManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageTextWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetWhereInput>;
  page?: Maybe<PageWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UrlUpdateOneInlineInput = {
  /** Create and connect one Url document */
  create?: Maybe<UrlCreateInput>;
  /** Update single Url document */
  update?: Maybe<UrlUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Url document */
  upsert?: Maybe<UrlUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Url document */
  connect?: Maybe<UrlWhereUniqueInput>;
  /** Disconnect currently connected Url document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Url document */
  delete?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ImageTextWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageTextWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  page?: Maybe<PageWhereInput>;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ProjectUpdateLocalizationInput = {
  data: ProjectUpdateLocalizationDataInput;
  locale: Locale;
};

export type SeoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** focuskw input for default locale (en) */
  focuskw?: Maybe<Scalars['String']>;
  /** opengraphUrl input for default locale (en) */
  opengraphUrl?: Maybe<Scalars['String']>;
  /** opengraphType input for default locale (en) */
  opengraphType?: Maybe<Scalars['String']>;
  /** opengraphTitle input for default locale (en) */
  opengraphTitle?: Maybe<Scalars['String']>;
  /** opengraphSiteName input for default locale (en) */
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** opengraphPublisher input for default locale (en) */
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** opengraphDescription input for default locale (en) */
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['DateTime']>;
  opengraphModifiedTime?: Maybe<Scalars['DateTime']>;
  opengraphAuthor?: Maybe<Scalars['DateTime']>;
  canonical?: Maybe<Scalars['String']>;
  /** twitterDescription input for default locale (en) */
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<AssetCreateOneInlineInput>;
  pages?: Maybe<PageCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<SeoCreateLocalizationsInput>;
};

export type SeoUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  focuskw?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one imageText */
  createImageText?: Maybe<ImageText>;
  /** Update one imageText */
  updateImageText?: Maybe<ImageText>;
  /** Delete one imageText from _all_ existing stages. Returns deleted document. */
  deleteImageText?: Maybe<ImageText>;
  /** Upsert one imageText */
  upsertImageText?: Maybe<ImageText>;
  /** Publish one imageText */
  publishImageText?: Maybe<ImageText>;
  /** Unpublish one imageText from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishImageText?: Maybe<ImageText>;
  /** Update many ImageText documents */
  updateManyImageTextsConnection: ImageTextConnection;
  /** Delete many ImageText documents, return deleted documents */
  deleteManyImageTextsConnection: ImageTextConnection;
  /** Publish many ImageText documents */
  publishManyImageTextsConnection: ImageTextConnection;
  /** Find many ImageText documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyImageTextsConnection: ImageTextConnection;
  /**
   * Update many imageTexts
   * @deprecated Please use the new paginated many mutation (updateManyImageTextsConnection)
   */
  updateManyImageTexts: BatchPayload;
  /**
   * Delete many ImageText documents
   * @deprecated Please use the new paginated many mutation (deleteManyImageTextsConnection)
   */
  deleteManyImageTexts: BatchPayload;
  /**
   * Publish many ImageText documents
   * @deprecated Please use the new paginated many mutation (publishManyImageTextsConnection)
   */
  publishManyImageTexts: BatchPayload;
  /**
   * Unpublish many ImageText documents
   * @deprecated Please use the new paginated many mutation (unpublishManyImageTextsConnection)
   */
  unpublishManyImageTexts: BatchPayload;
  /** Create one introSection */
  createIntroSection?: Maybe<IntroSection>;
  /** Update one introSection */
  updateIntroSection?: Maybe<IntroSection>;
  /** Delete one introSection from _all_ existing stages. Returns deleted document. */
  deleteIntroSection?: Maybe<IntroSection>;
  /** Upsert one introSection */
  upsertIntroSection?: Maybe<IntroSection>;
  /** Publish one introSection */
  publishIntroSection?: Maybe<IntroSection>;
  /** Unpublish one introSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishIntroSection?: Maybe<IntroSection>;
  /** Update many IntroSection documents */
  updateManyIntroSectionsConnection: IntroSectionConnection;
  /** Delete many IntroSection documents, return deleted documents */
  deleteManyIntroSectionsConnection: IntroSectionConnection;
  /** Publish many IntroSection documents */
  publishManyIntroSectionsConnection: IntroSectionConnection;
  /** Find many IntroSection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyIntroSectionsConnection: IntroSectionConnection;
  /**
   * Update many introSections
   * @deprecated Please use the new paginated many mutation (updateManyIntroSectionsConnection)
   */
  updateManyIntroSections: BatchPayload;
  /**
   * Delete many IntroSection documents
   * @deprecated Please use the new paginated many mutation (deleteManyIntroSectionsConnection)
   */
  deleteManyIntroSections: BatchPayload;
  /**
   * Publish many IntroSection documents
   * @deprecated Please use the new paginated many mutation (publishManyIntroSectionsConnection)
   */
  publishManyIntroSections: BatchPayload;
  /**
   * Unpublish many IntroSection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyIntroSectionsConnection)
   */
  unpublishManyIntroSections: BatchPayload;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Create one projectCategory */
  createProjectCategory?: Maybe<ProjectCategory>;
  /** Update one projectCategory */
  updateProjectCategory?: Maybe<ProjectCategory>;
  /** Delete one projectCategory from _all_ existing stages. Returns deleted document. */
  deleteProjectCategory?: Maybe<ProjectCategory>;
  /** Upsert one projectCategory */
  upsertProjectCategory?: Maybe<ProjectCategory>;
  /** Publish one projectCategory */
  publishProjectCategory?: Maybe<ProjectCategory>;
  /** Unpublish one projectCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProjectCategory?: Maybe<ProjectCategory>;
  /** Update many ProjectCategory documents */
  updateManyProjectCategoriesConnection: ProjectCategoryConnection;
  /** Delete many ProjectCategory documents, return deleted documents */
  deleteManyProjectCategoriesConnection: ProjectCategoryConnection;
  /** Publish many ProjectCategory documents */
  publishManyProjectCategoriesConnection: ProjectCategoryConnection;
  /** Find many ProjectCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectCategoriesConnection: ProjectCategoryConnection;
  /**
   * Update many projectCategories
   * @deprecated Please use the new paginated many mutation (updateManyProjectCategoriesConnection)
   */
  updateManyProjectCategories: BatchPayload;
  /**
   * Delete many ProjectCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectCategoriesConnection)
   */
  deleteManyProjectCategories: BatchPayload;
  /**
   * Publish many ProjectCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectCategoriesConnection)
   */
  publishManyProjectCategories: BatchPayload;
  /**
   * Unpublish many ProjectCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectCategoriesConnection)
   */
  unpublishManyProjectCategories: BatchPayload;
  /** Create one seo */
  createSeo?: Maybe<Seo>;
  /** Update one seo */
  updateSeo?: Maybe<Seo>;
  /** Delete one seo from _all_ existing stages. Returns deleted document. */
  deleteSeo?: Maybe<Seo>;
  /** Upsert one seo */
  upsertSeo?: Maybe<Seo>;
  /** Publish one seo */
  publishSeo?: Maybe<Seo>;
  /** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSeo?: Maybe<Seo>;
  /** Update many Seo documents */
  updateManySeosConnection: SeoConnection;
  /** Delete many Seo documents, return deleted documents */
  deleteManySeosConnection: SeoConnection;
  /** Publish many Seo documents */
  publishManySeosConnection: SeoConnection;
  /** Find many Seo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySeosConnection: SeoConnection;
  /**
   * Update many seos
   * @deprecated Please use the new paginated many mutation (updateManySeosConnection)
   */
  updateManySeos: BatchPayload;
  /**
   * Delete many Seo documents
   * @deprecated Please use the new paginated many mutation (deleteManySeosConnection)
   */
  deleteManySeos: BatchPayload;
  /**
   * Publish many Seo documents
   * @deprecated Please use the new paginated many mutation (publishManySeosConnection)
   */
  publishManySeos: BatchPayload;
  /**
   * Unpublish many Seo documents
   * @deprecated Please use the new paginated many mutation (unpublishManySeosConnection)
   */
  unpublishManySeos: BatchPayload;
  /** Create one url */
  createUrl?: Maybe<Url>;
  /** Update one url */
  updateUrl?: Maybe<Url>;
  /** Delete one url from _all_ existing stages. Returns deleted document. */
  deleteUrl?: Maybe<Url>;
  /** Upsert one url */
  upsertUrl?: Maybe<Url>;
  /** Publish one url */
  publishUrl?: Maybe<Url>;
  /** Unpublish one url from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishUrl?: Maybe<Url>;
  /** Update many Url documents */
  updateManyUrlsConnection: UrlConnection;
  /** Delete many Url documents, return deleted documents */
  deleteManyUrlsConnection: UrlConnection;
  /** Publish many Url documents */
  publishManyUrlsConnection: UrlConnection;
  /** Find many Url documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyUrlsConnection: UrlConnection;
  /**
   * Update many urls
   * @deprecated Please use the new paginated many mutation (updateManyUrlsConnection)
   */
  updateManyUrls: BatchPayload;
  /**
   * Delete many Url documents
   * @deprecated Please use the new paginated many mutation (deleteManyUrlsConnection)
   */
  deleteManyUrls: BatchPayload;
  /**
   * Publish many Url documents
   * @deprecated Please use the new paginated many mutation (publishManyUrlsConnection)
   */
  publishManyUrls: BatchPayload;
  /**
   * Unpublish many Url documents
   * @deprecated Please use the new paginated many mutation (unpublishManyUrlsConnection)
   */
  unpublishManyUrls: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateImageTextArgs = {
  data: ImageTextCreateInput;
};


export type MutationUpdateImageTextArgs = {
  where: ImageTextWhereUniqueInput;
  data: ImageTextUpdateInput;
};


export type MutationDeleteImageTextArgs = {
  where: ImageTextWhereUniqueInput;
};


export type MutationUpsertImageTextArgs = {
  where: ImageTextWhereUniqueInput;
  upsert: ImageTextUpsertInput;
};


export type MutationPublishImageTextArgs = {
  where: ImageTextWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishImageTextArgs = {
  where: ImageTextWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyImageTextsConnectionArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  data: ImageTextUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyImageTextsConnectionArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyImageTextsConnectionArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyImageTextsConnectionArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyImageTextsArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  data: ImageTextUpdateManyInput;
};


export type MutationDeleteManyImageTextsArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
};


export type MutationPublishManyImageTextsArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyImageTextsArgs = {
  where?: Maybe<ImageTextManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateIntroSectionArgs = {
  data: IntroSectionCreateInput;
};


export type MutationUpdateIntroSectionArgs = {
  where: IntroSectionWhereUniqueInput;
  data: IntroSectionUpdateInput;
};


export type MutationDeleteIntroSectionArgs = {
  where: IntroSectionWhereUniqueInput;
};


export type MutationUpsertIntroSectionArgs = {
  where: IntroSectionWhereUniqueInput;
  upsert: IntroSectionUpsertInput;
};


export type MutationPublishIntroSectionArgs = {
  where: IntroSectionWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishIntroSectionArgs = {
  where: IntroSectionWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyIntroSectionsConnectionArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  data: IntroSectionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyIntroSectionsConnectionArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyIntroSectionsConnectionArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyIntroSectionsConnectionArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyIntroSectionsArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  data: IntroSectionUpdateManyInput;
};


export type MutationDeleteManyIntroSectionsArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
};


export type MutationPublishManyIntroSectionsArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyIntroSectionsArgs = {
  where?: Maybe<IntroSectionManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput;
  upsert: PageUpsertInput;
};


export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationUpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  where: ProjectWhereUniqueInput;
  upsert: ProjectUpsertInput;
};


export type MutationPublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProjectCategoryArgs = {
  data: ProjectCategoryCreateInput;
};


export type MutationUpdateProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
  data: ProjectCategoryUpdateInput;
};


export type MutationDeleteProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationUpsertProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
  upsert: ProjectCategoryUpsertInput;
};


export type MutationPublishProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyProjectCategoriesConnectionArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  data: ProjectCategoryUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProjectCategoriesConnectionArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProjectCategoriesConnectionArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyProjectCategoriesConnectionArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyProjectCategoriesArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  data: ProjectCategoryUpdateManyInput;
};


export type MutationDeleteManyProjectCategoriesArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
};


export type MutationPublishManyProjectCategoriesArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyProjectCategoriesArgs = {
  where?: Maybe<ProjectCategoryManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSeoArgs = {
  data: SeoCreateInput;
};


export type MutationUpdateSeoArgs = {
  where: SeoWhereUniqueInput;
  data: SeoUpdateInput;
};


export type MutationDeleteSeoArgs = {
  where: SeoWhereUniqueInput;
};


export type MutationUpsertSeoArgs = {
  where: SeoWhereUniqueInput;
  upsert: SeoUpsertInput;
};


export type MutationPublishSeoArgs = {
  where: SeoWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishSeoArgs = {
  where: SeoWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  data: SeoUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  data: SeoUpdateManyInput;
};


export type MutationDeleteManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
};


export type MutationPublishManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateUrlArgs = {
  data: UrlCreateInput;
};


export type MutationUpdateUrlArgs = {
  where: UrlWhereUniqueInput;
  data: UrlUpdateInput;
};


export type MutationDeleteUrlArgs = {
  where: UrlWhereUniqueInput;
};


export type MutationUpsertUrlArgs = {
  where: UrlWhereUniqueInput;
  upsert: UrlUpsertInput;
};


export type MutationPublishUrlArgs = {
  where: UrlWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishUrlArgs = {
  where: UrlWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyUrlsConnectionArgs = {
  where?: Maybe<UrlManyWhereInput>;
  data: UrlUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyUrlsConnectionArgs = {
  where?: Maybe<UrlManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyUrlsConnectionArgs = {
  where?: Maybe<UrlManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyUrlsConnectionArgs = {
  where?: Maybe<UrlManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyUrlsArgs = {
  where?: Maybe<UrlManyWhereInput>;
  data: UrlUpdateManyInput;
};


export type MutationDeleteManyUrlsArgs = {
  where?: Maybe<UrlManyWhereInput>;
};


export type MutationPublishManyUrlsArgs = {
  where?: Maybe<UrlManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyUrlsArgs = {
  where?: Maybe<UrlManyWhereInput>;
  from?: Array<Stage>;
};

export type ImageTextUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ImageTextWhereUniqueInput;
  /** Upsert data */
  data: ImageTextUpsertInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  pageTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  pageTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pageTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  pageTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: Maybe<Scalars['String']>;
  introSection?: Maybe<IntroSectionWhereInput>;
  urls_every?: Maybe<UrlWhereInput>;
  urls_some?: Maybe<UrlWhereInput>;
  urls_none?: Maybe<UrlWhereInput>;
  seo?: Maybe<SeoWhereInput>;
  imageTexts_every?: Maybe<ImageTextWhereInput>;
  imageTexts_some?: Maybe<ImageTextWhereInput>;
  imageTexts_none?: Maybe<ImageTextWhereInput>;
};

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

export type IntroSectionCreateOneInlineInput = {
  /** Create and connect one IntroSection document */
  create?: Maybe<IntroSectionCreateInput>;
  /** Connect one existing IntroSection document */
  connect?: Maybe<IntroSectionWhereUniqueInput>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProjectWhereInput;
  /** Update many input */
  data: ProjectUpdateManyInput;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

/** Identifies documents */
export type ProjectCategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectCategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  projects_every?: Maybe<ProjectWhereInput>;
  projects_some?: Maybe<ProjectWhereInput>;
  projects_none?: Maybe<ProjectWhereInput>;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SeoWhereUniqueInput;
  /** Upsert data */
  data: SeoUpsertInput;
};

export type ImageTextCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ImageTextUpdateInput = {
  image?: Maybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  page?: Maybe<PageUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<ImageTextUpdateLocalizationsInput>;
};

export type ProjectCategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectCategoryWhereUniqueInput;
  /** Upsert data */
  data: ProjectCategoryUpsertInput;
};

export enum SeoOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FocuskwAsc = 'focuskw_ASC',
  FocuskwDesc = 'focuskw_DESC',
  OpengraphUrlAsc = 'opengraphUrl_ASC',
  OpengraphUrlDesc = 'opengraphUrl_DESC',
  OpengraphTypeAsc = 'opengraphType_ASC',
  OpengraphTypeDesc = 'opengraphType_DESC',
  OpengraphTitleAsc = 'opengraphTitle_ASC',
  OpengraphTitleDesc = 'opengraphTitle_DESC',
  OpengraphSiteNameAsc = 'opengraphSiteName_ASC',
  OpengraphSiteNameDesc = 'opengraphSiteName_DESC',
  OpengraphPublisherAsc = 'opengraphPublisher_ASC',
  OpengraphPublisherDesc = 'opengraphPublisher_DESC',
  OpengraphDescriptionAsc = 'opengraphDescription_ASC',
  OpengraphDescriptionDesc = 'opengraphDescription_DESC',
  OpengraphPublishedTimeAsc = 'opengraphPublishedTime_ASC',
  OpengraphPublishedTimeDesc = 'opengraphPublishedTime_DESC',
  OpengraphModifiedTimeAsc = 'opengraphModifiedTime_ASC',
  OpengraphModifiedTimeDesc = 'opengraphModifiedTime_DESC',
  OpengraphAuthorAsc = 'opengraphAuthor_ASC',
  OpengraphAuthorDesc = 'opengraphAuthor_DESC',
  CanonicalAsc = 'canonical_ASC',
  CanonicalDesc = 'canonical_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC'
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type ImageTextUpdateManyInlineInput = {
  /** Create and connect multiple ImageText documents */
  create?: Maybe<Array<ImageTextCreateInput>>;
  /** Connect multiple existing ImageText documents */
  connect?: Maybe<Array<ImageTextConnectInput>>;
  /** Override currently-connected documents with multiple existing ImageText documents */
  set?: Maybe<Array<ImageTextWhereUniqueInput>>;
  /** Update multiple ImageText documents */
  update?: Maybe<Array<ImageTextUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageText documents */
  upsert?: Maybe<Array<ImageTextUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ImageText documents */
  disconnect?: Maybe<Array<ImageTextWhereUniqueInput>>;
  /** Delete multiple ImageText documents */
  delete?: Maybe<Array<ImageTextWhereUniqueInput>>;
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing Seo documents */
  create?: Maybe<Array<SeoCreateInput>>;
  /** Connect multiple existing Seo documents */
  connect?: Maybe<Array<SeoWhereUniqueInput>>;
};

export type ImageTextUpdateLocalizationInput = {
  data: ImageTextUpdateLocalizationDataInput;
  locale: Locale;
};

export type IntroSectionUpdateLocalizationInput = {
  data: IntroSectionUpdateLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type ProjectCategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectCategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  projects_every?: Maybe<ProjectWhereInput>;
  projects_some?: Maybe<ProjectWhereInput>;
  projects_none?: Maybe<ProjectWhereInput>;
};

/** Seo to attach to a Page */
export type Seo = Node & {
  __typename?: 'Seo';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Seo>;
  /** Get the document in other stages */
  documentInStages: Array<Seo>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  focuskw?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['DateTime']>;
  opengraphModifiedTime?: Maybe<Scalars['DateTime']>;
  opengraphAuthor?: Maybe<Scalars['DateTime']>;
  canonical?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Asset>;
  pages: Array<Page>;
  /** List of Seo versions */
  history: Array<Version>;
};


/** Seo to attach to a Page */
export type SeoLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Seo to attach to a Page */
export type SeoDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Seo to attach to a Page */
export type SeoCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Seo to attach to a Page */
export type SeoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Seo to attach to a Page */
export type SeoPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Seo to attach to a Page */
export type SeoTwitterImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Seo to attach to a Page */
export type SeoPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Seo to attach to a Page */
export type SeoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Url to attach Page */
export type Url = Node & {
  __typename?: 'Url';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Url>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  page?: Maybe<Page>;
  /** List of Url versions */
  history: Array<Version>;
};


/** Url to attach Page */
export type UrlDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Url to attach Page */
export type UrlPageArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Url to attach Page */
export type UrlHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export enum ProjectCategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type UrlUpsertInput = {
  /** Create document if it didn't exist */
  create: UrlCreateInput;
  /** Update document if it exists */
  update: UrlUpdateInput;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** pageTitle input for default locale (en) */
  pageTitle: Scalars['String'];
  introSection?: Maybe<IntroSectionCreateOneInlineInput>;
  urls?: Maybe<UrlCreateManyInlineInput>;
  seo?: Maybe<SeoCreateOneInlineInput>;
  imageTexts?: Maybe<ImageTextCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageCreateLocalizationsInput>;
};

export type ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
};

/** A connection to a list of items. */
export type UrlConnection = {
  __typename?: 'UrlConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UrlEdge>;
  aggregate: Aggregate;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type IntroSectionUpsertLocalizationInput = {
  update: IntroSectionUpdateLocalizationDataInput;
  create: IntroSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
};

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** Identifies documents */
export type IntroSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IntroSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<IntroSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<IntroSectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  page?: Maybe<PageWhereInput>;
};

export type IntroSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
};

export type IntroSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: IntroSectionWhereUniqueInput;
  /** Document to update */
  data: IntroSectionUpdateInput;
};

export type ProjectUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<ProjectUpdateManyLocalizationInput>>;
};

export type SeoCreateLocalizationInput = {
  /** Localization input */
  data: SeoCreateLocalizationDataInput;
  locale: Locale;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ImageTextCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<ImageTextCreateLocalizationInput>>;
};

export type IntroSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<IntroSectionCreateLocalizationInput>>;
};

/** Website pages */
export type Page = Node & {
  __typename?: 'Page';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Page Title for SEO purposes */
  pageTitle: Scalars['String'];
  introSection?: Maybe<IntroSection>;
  urls: Array<Url>;
  seo?: Maybe<Seo>;
  imageTexts: Array<ImageText>;
  /** List of Page versions */
  history: Array<Version>;
};


/** Website pages */
export type PageLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Website pages */
export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Website pages */
export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Website pages */
export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Website pages */
export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Website pages */
export type PageIntroSectionArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Website pages */
export type PageUrlsArgs = {
  where?: Maybe<UrlWhereInput>;
  orderBy?: Maybe<UrlOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Website pages */
export type PageSeoArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Website pages */
export type PageImageTextsArgs = {
  where?: Maybe<ImageTextWhereInput>;
  orderBy?: Maybe<ImageTextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Website pages */
export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  introSection?: Maybe<IntroSectionWhereInput>;
  urls_every?: Maybe<UrlWhereInput>;
  urls_some?: Maybe<UrlWhereInput>;
  urls_none?: Maybe<UrlWhereInput>;
  seo?: Maybe<SeoWhereInput>;
  imageTexts_every?: Maybe<ImageTextWhereInput>;
  imageTexts_some?: Maybe<ImageTextWhereInput>;
  imageTexts_none?: Maybe<ImageTextWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SeoWhereUniqueInput;
  /** Document to update */
  data: SeoUpdateInput;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ImageTextUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageTextCreateInput;
  /** Update document if it exists */
  update: ImageTextUpdateInput;
};

export type ProjectCategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  projects?: Maybe<ProjectCreateManyInlineInput>;
};

/** An edge in a connection. */
export type UrlEdge = {
  __typename?: 'UrlEdge';
  /** The item at the end of the edge. */
  node: Url;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ImageTextUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<ImageTextCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<ImageTextUpdateLocalizationInput>>;
  upsert?: Maybe<Array<ImageTextUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ImageTextUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ImageTextWhereInput;
  /** Update many input */
  data: ImageTextUpdateManyInput;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type SeoCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  focuskw?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  focuskw?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  focuskw_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  focuskw_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  focuskw_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  focuskw_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  focuskw_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  focuskw_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  focuskw_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  focuskw_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  focuskw_not_ends_with?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  opengraphUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  opengraphUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  opengraphUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  opengraphUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  opengraphUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  opengraphUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  opengraphUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  opengraphUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  opengraphUrl_not_ends_with?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  opengraphType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  opengraphType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  opengraphType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  opengraphType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  opengraphType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  opengraphType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  opengraphType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  opengraphType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  opengraphType_not_ends_with?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  opengraphTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  opengraphTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  opengraphTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  opengraphTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  opengraphTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  opengraphTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  opengraphTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  opengraphTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  opengraphTitle_not_ends_with?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  opengraphSiteName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  opengraphSiteName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  opengraphSiteName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  opengraphSiteName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  opengraphSiteName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  opengraphSiteName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  opengraphSiteName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  opengraphSiteName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  opengraphSiteName_not_ends_with?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  opengraphPublisher_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  opengraphPublisher_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  opengraphPublisher_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  opengraphPublisher_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  opengraphPublisher_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  opengraphPublisher_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  opengraphPublisher_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  opengraphPublisher_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  opengraphPublisher_not_ends_with?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  opengraphDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  opengraphDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  opengraphDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  opengraphDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  opengraphDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  opengraphDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  opengraphDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  opengraphDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  opengraphDescription_not_ends_with?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  opengraphPublishedTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  opengraphPublishedTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  opengraphPublishedTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  opengraphPublishedTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  opengraphPublishedTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  opengraphPublishedTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  opengraphPublishedTime_gte?: Maybe<Scalars['DateTime']>;
  opengraphModifiedTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  opengraphModifiedTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  opengraphModifiedTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  opengraphModifiedTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  opengraphModifiedTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  opengraphModifiedTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  opengraphModifiedTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  opengraphModifiedTime_gte?: Maybe<Scalars['DateTime']>;
  opengraphAuthor?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  opengraphAuthor_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  opengraphAuthor_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  opengraphAuthor_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  opengraphAuthor_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  opengraphAuthor_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  opengraphAuthor_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  opengraphAuthor_gte?: Maybe<Scalars['DateTime']>;
  canonical?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  canonical_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  canonical_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  canonical_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  canonical_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  canonical_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  canonical_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  canonical_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  canonical_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  canonical_not_ends_with?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  twitterDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  twitterDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  twitterDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  twitterDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterDescription_not_ends_with?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type PageUpdateInput = {
  /** pageTitle input for default locale (en) */
  pageTitle?: Maybe<Scalars['String']>;
  introSection?: Maybe<IntroSectionUpdateOneInlineInput>;
  urls?: Maybe<UrlUpdateManyInlineInput>;
  seo?: Maybe<SeoUpdateOneInlineInput>;
  imageTexts?: Maybe<ImageTextUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<PageUpdateLocalizationsInput>;
};

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
};

export type SeoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<SeoCreateLocalizationInput>>;
};

export type SeoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<SeoCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<SeoUpdateLocalizationInput>>;
  upsert?: Maybe<Array<SeoUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};


export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type ImageTextUpdateOneInlineInput = {
  /** Create and connect one ImageText document */
  create?: Maybe<ImageTextCreateInput>;
  /** Update single ImageText document */
  update?: Maybe<ImageTextUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageText document */
  upsert?: Maybe<ImageTextUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ImageText document */
  connect?: Maybe<ImageTextWhereUniqueInput>;
  /** Disconnect currently connected ImageText document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ImageText document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectCategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};


export type IntroSectionUpdateManyInput = {
  /** smallParagraph input for default locale (en) */
  smallParagraph?: Maybe<Scalars['String']>;
  /** bigBoldParagraph input for default locale (en) */
  bigBoldParagraph?: Maybe<Scalars['String']>;
  /** bigParagraph input for default locale (en) */
  bigParagraph?: Maybe<Scalars['String']>;
  /** briefDescription input for default locale (en) */
  briefDescription?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<IntroSectionUpdateManyLocalizationsInput>;
};

export type ProjectCategoryCreateOneInlineInput = {
  /** Create and connect one ProjectCategory document */
  create?: Maybe<ProjectCategoryCreateInput>;
  /** Connect one existing ProjectCategory document */
  connect?: Maybe<ProjectCategoryWhereUniqueInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SeoEdge';
  /** The item at the end of the edge. */
  node: Seo;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: Maybe<SeoCreateInput>;
  /** Connect one existing Seo document */
  connect?: Maybe<SeoWhereUniqueInput>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type ImageTextCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  page?: Maybe<PageCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<ImageTextCreateLocalizationsInput>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput;
  /** Update many input */
  data: PageUpdateManyInput;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isOpenSource_not?: Maybe<Scalars['Boolean']>;
  featureImage?: Maybe<AssetWhereInput>;
  projectCategory?: Maybe<ProjectCategoryWhereInput>;
};

export type SeoUpdateInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** focuskw input for default locale (en) */
  focuskw?: Maybe<Scalars['String']>;
  /** opengraphUrl input for default locale (en) */
  opengraphUrl?: Maybe<Scalars['String']>;
  /** opengraphType input for default locale (en) */
  opengraphType?: Maybe<Scalars['String']>;
  /** opengraphTitle input for default locale (en) */
  opengraphTitle?: Maybe<Scalars['String']>;
  /** opengraphSiteName input for default locale (en) */
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** opengraphPublisher input for default locale (en) */
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** opengraphDescription input for default locale (en) */
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['DateTime']>;
  opengraphModifiedTime?: Maybe<Scalars['DateTime']>;
  opengraphAuthor?: Maybe<Scalars['DateTime']>;
  canonical?: Maybe<Scalars['String']>;
  /** twitterDescription input for default locale (en) */
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<AssetUpdateOneInlineInput>;
  pages?: Maybe<PageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<SeoUpdateLocalizationsInput>;
};


/** Image + Text block */
export type ImageText = Node & {
  __typename?: 'ImageText';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ImageText>;
  /** Get the document in other stages */
  documentInStages: Array<ImageText>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Add Image */
  image?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  /** List of ImageText versions */
  history: Array<Version>;
};


/** Image + Text block */
export type ImageTextLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Image + Text block */
export type ImageTextDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Image + Text block */
export type ImageTextCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Image + Text block */
export type ImageTextUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Image + Text block */
export type ImageTextPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Image + Text block */
export type ImageTextImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Image + Text block */
export type ImageTextPageArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Image + Text block */
export type ImageTextHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ImageTextCreateLocalizationInput = {
  /** Localization input */
  data: ImageTextCreateLocalizationDataInput;
  locale: Locale;
};

export type IntroSectionUpdateManyInlineInput = {
  /** Create and connect multiple IntroSection documents */
  create?: Maybe<Array<IntroSectionCreateInput>>;
  /** Connect multiple existing IntroSection documents */
  connect?: Maybe<Array<IntroSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing IntroSection documents */
  set?: Maybe<Array<IntroSectionWhereUniqueInput>>;
  /** Update multiple IntroSection documents */
  update?: Maybe<Array<IntroSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple IntroSection documents */
  upsert?: Maybe<Array<IntroSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple IntroSection documents */
  disconnect?: Maybe<Array<IntroSectionWhereUniqueInput>>;
  /** Delete multiple IntroSection documents */
  delete?: Maybe<Array<IntroSectionWhereUniqueInput>>;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  aggregate: Aggregate;
};

export enum ProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  IsOpenSourceAsc = 'isOpenSource_ASC',
  IsOpenSourceDesc = 'isOpenSource_DESC'
}

export type ProjectUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: Maybe<ProjectUpdateManyLocalizationsInput>;
};

export type UrlUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type IntroSectionUpdateLocalizationDataInput = {
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  featureImage?: Maybe<AssetCreateOneInlineInput>;
  projectCategory?: Maybe<ProjectCategoryCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<ProjectCreateLocalizationsInput>;
};

export type ProjectCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCategoryCreateInput;
  /** Update document if it exists */
  update: ProjectCategoryUpdateInput;
};

export type ImageTextUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ImageTextWhereUniqueInput;
  /** Document to update */
  data: ImageTextUpdateInput;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  seoTwitterImage_every?: Maybe<SeoWhereInput>;
  seoTwitterImage_some?: Maybe<SeoWhereInput>;
  seoTwitterImage_none?: Maybe<SeoWhereInput>;
  imageTextImage_every?: Maybe<ImageTextWhereInput>;
  imageTextImage_some?: Maybe<ImageTextWhereInput>;
  imageTextImage_none?: Maybe<ImageTextWhereInput>;
  projectFeatureImage_every?: Maybe<ProjectWhereInput>;
  projectFeatureImage_some?: Maybe<ProjectWhereInput>;
  projectFeatureImage_none?: Maybe<ProjectWhereInput>;
};

export type ImageTextConnectInput = {
  /** Document to connect */
  where: ImageTextWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type UrlCreateOneInlineInput = {
  /** Create and connect one Url document */
  create?: Maybe<UrlCreateInput>;
  /** Connect one existing Url document */
  connect?: Maybe<UrlWhereUniqueInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateManyLocalizationInput = {
  data: ProjectUpdateManyLocalizationDataInput;
  locale: Locale;
};

/** References IntroSection record uniquely */
export type IntroSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type IntroSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<IntroSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<IntroSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<IntroSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type IntroSectionUpdateOneInlineInput = {
  /** Create and connect one IntroSection document */
  create?: Maybe<IntroSectionCreateInput>;
  /** Update single IntroSection document */
  update?: Maybe<IntroSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single IntroSection document */
  upsert?: Maybe<IntroSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing IntroSection document */
  connect?: Maybe<IntroSectionWhereUniqueInput>;
  /** Disconnect currently connected IntroSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected IntroSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: Maybe<SeoCreateInput>;
  /** Update single Seo document */
  update?: Maybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Seo document */
  upsert?: Maybe<SeoUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Seo document */
  connect?: Maybe<SeoWhereUniqueInput>;
  /** Disconnect currently connected Seo document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Seo document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Document to update */
  data: ProjectUpdateInput;
};

export type ProjectCategoryConnectInput = {
  /** Document to connect */
  where: ProjectCategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  seoTwitterImage?: Maybe<SeoCreateManyInlineInput>;
  imageTextImage?: Maybe<ImageTextCreateManyInlineInput>;
  projectFeatureImage?: Maybe<ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

/** Identifies documents */
export type IntroSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IntroSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<IntroSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<IntroSectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  smallParagraph?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  smallParagraph_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  smallParagraph_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  smallParagraph_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  smallParagraph_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  smallParagraph_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  smallParagraph_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  smallParagraph_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  smallParagraph_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  smallParagraph_not_ends_with?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bigBoldParagraph_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bigBoldParagraph_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bigBoldParagraph_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bigBoldParagraph_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bigBoldParagraph_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bigBoldParagraph_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bigBoldParagraph_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bigBoldParagraph_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bigBoldParagraph_not_ends_with?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bigParagraph_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bigParagraph_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bigParagraph_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bigParagraph_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bigParagraph_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bigParagraph_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bigParagraph_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bigParagraph_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bigParagraph_not_ends_with?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  briefDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  briefDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  briefDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  briefDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  briefDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  briefDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  briefDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  briefDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  briefDescription_not_ends_with?: Maybe<Scalars['String']>;
  page?: Maybe<PageWhereInput>;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Upsert data */
  data: ProjectUpsertInput;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SeoConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  aggregate: Aggregate;
};

export enum UrlOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type ProjectUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<ProjectCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<ProjectUpdateLocalizationInput>>;
  upsert?: Maybe<Array<ProjectUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ProjectCategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectCategoryWhereUniqueInput;
  /** Document to update */
  data: ProjectCategoryUpdateInput;
};

export type SeoUpdateLocalizationInput = {
  data: SeoUpdateLocalizationDataInput;
  locale: Locale;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  seoTwitterImage: Array<Seo>;
  imageTextImage: Array<ImageText>;
  projectFeatureImage: Array<Project>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetSeoTwitterImageArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetImageTextImageArgs = {
  where?: Maybe<ImageTextWhereInput>;
  orderBy?: Maybe<ImageTextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetProjectFeatureImageArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  seoTwitterImage?: Maybe<SeoUpdateManyInlineInput>;
  imageTextImage?: Maybe<ImageTextUpdateManyInlineInput>;
  projectFeatureImage?: Maybe<ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type ImageTextCreateManyInlineInput = {
  /** Create and connect multiple existing ImageText documents */
  create?: Maybe<Array<ImageTextCreateInput>>;
  /** Connect multiple existing ImageText documents */
  connect?: Maybe<Array<ImageTextWhereUniqueInput>>;
};

export type PageUpdateLocalizationDataInput = {
  pageTitle?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ProjectCategoryConnection = {
  __typename?: 'ProjectCategoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProjectCategoryEdge>;
  aggregate: Aggregate;
};

export type ImageTextUpdateManyLocalizationInput = {
  data: ImageTextUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type IntroSectionConnectInput = {
  /** Document to connect */
  where: IntroSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Document to update */
  data: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  update: PageUpdateLocalizationDataInput;
  create: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type ProjectCategoryUpdateOneInlineInput = {
  /** Create and connect one ProjectCategory document */
  create?: Maybe<ProjectCategoryCreateInput>;
  /** Update single ProjectCategory document */
  update?: Maybe<ProjectCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectCategory document */
  upsert?: Maybe<ProjectCategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProjectCategory document */
  connect?: Maybe<ProjectCategoryWhereUniqueInput>;
  /** Disconnect currently connected ProjectCategory document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProjectCategory document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

export type ImageTextCreateOneInlineInput = {
  /** Create and connect one ImageText document */
  create?: Maybe<ImageTextCreateInput>;
  /** Connect one existing ImageText document */
  connect?: Maybe<ImageTextWhereUniqueInput>;
};

export enum IntroSectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SmallParagraphAsc = 'smallParagraph_ASC',
  SmallParagraphDesc = 'smallParagraph_DESC',
  BigBoldParagraphAsc = 'bigBoldParagraph_ASC',
  BigBoldParagraphDesc = 'bigBoldParagraph_DESC',
  BigParagraphAsc = 'bigParagraph_ASC',
  BigParagraphDesc = 'bigParagraph_DESC',
  BriefDescriptionAsc = 'briefDescription_ASC',
  BriefDescriptionDesc = 'briefDescription_DESC'
}

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectCategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProjectCategoryWhereInput;
  /** Update many input */
  data: ProjectCategoryUpdateManyInput;
};

export type UrlUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UrlWhereUniqueInput;
  /** Document to update */
  data: UrlUpdateInput;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

export type ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type SeoUpsertLocalizationInput = {
  update: SeoUpdateLocalizationDataInput;
  create: SeoCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  pageTitle: Scalars['String'];
};

export type IntroSectionCreateLocalizationInput = {
  /** Localization input */
  data: IntroSectionCreateLocalizationDataInput;
  locale: Locale;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** The item at the end of the edge. */
  node: Project;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An edge in a connection. */
export type IntroSectionEdge = {
  __typename?: 'IntroSectionEdge';
  /** The item at the end of the edge. */
  node: IntroSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC'
}

export type ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
};

export type ProjectCategoryUpdateManyInlineInput = {
  /** Create and connect multiple ProjectCategory documents */
  create?: Maybe<Array<ProjectCategoryCreateInput>>;
  /** Connect multiple existing ProjectCategory documents */
  connect?: Maybe<Array<ProjectCategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing ProjectCategory documents */
  set?: Maybe<Array<ProjectCategoryWhereUniqueInput>>;
  /** Update multiple ProjectCategory documents */
  update?: Maybe<Array<ProjectCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProjectCategory documents */
  upsert?: Maybe<Array<ProjectCategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProjectCategory documents */
  disconnect?: Maybe<Array<ProjectCategoryWhereUniqueInput>>;
  /** Delete multiple ProjectCategory documents */
  delete?: Maybe<Array<ProjectCategoryWhereUniqueInput>>;
};

export type SeoUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  focuskw?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
};

export type IntroSectionUpdateManyLocalizationDataInput = {
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple imageTexts */
  imageTexts: Array<ImageText>;
  /** Retrieve a single imageText */
  imageText?: Maybe<ImageText>;
  /** Retrieve multiple imageTexts using the Relay connection interface */
  imageTextsConnection: ImageTextConnection;
  /** Retrieve document version */
  imageTextVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple introSections */
  introSections: Array<IntroSection>;
  /** Retrieve a single introSection */
  introSection?: Maybe<IntroSection>;
  /** Retrieve multiple introSections using the Relay connection interface */
  introSectionsConnection: IntroSectionConnection;
  /** Retrieve document version */
  introSectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projectCategories */
  projectCategories: Array<ProjectCategory>;
  /** Retrieve a single projectCategory */
  projectCategory?: Maybe<ProjectCategory>;
  /** Retrieve multiple projectCategories using the Relay connection interface */
  projectCategoriesConnection: ProjectCategoryConnection;
  /** Retrieve document version */
  projectCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple seos */
  seos: Array<Seo>;
  /** Retrieve a single seo */
  seo?: Maybe<Seo>;
  /** Retrieve multiple seos using the Relay connection interface */
  seosConnection: SeoConnection;
  /** Retrieve document version */
  seoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple urls */
  urls: Array<Url>;
  /** Retrieve a single url */
  url?: Maybe<Url>;
  /** Retrieve multiple urls using the Relay connection interface */
  urlsConnection: UrlConnection;
  /** Retrieve document version */
  urlVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryImageTextsArgs = {
  where?: Maybe<ImageTextWhereInput>;
  orderBy?: Maybe<ImageTextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryImageTextArgs = {
  where: ImageTextWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryImageTextsConnectionArgs = {
  where?: Maybe<ImageTextWhereInput>;
  orderBy?: Maybe<ImageTextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryImageTextVersionArgs = {
  where: VersionWhereInput;
};


export type QueryIntroSectionsArgs = {
  where?: Maybe<IntroSectionWhereInput>;
  orderBy?: Maybe<IntroSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryIntroSectionArgs = {
  where: IntroSectionWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryIntroSectionsConnectionArgs = {
  where?: Maybe<IntroSectionWhereInput>;
  orderBy?: Maybe<IntroSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryIntroSectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectCategoriesArgs = {
  where?: Maybe<ProjectCategoryWhereInput>;
  orderBy?: Maybe<ProjectCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectCategoriesConnectionArgs = {
  where?: Maybe<ProjectCategoryWhereInput>;
  orderBy?: Maybe<ProjectCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySeosArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeoArgs = {
  where: SeoWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeosConnectionArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySeoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUrlsArgs = {
  where?: Maybe<UrlWhereInput>;
  orderBy?: Maybe<UrlOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUrlArgs = {
  where: UrlWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUrlsConnectionArgs = {
  where?: Maybe<UrlWhereInput>;
  orderBy?: Maybe<UrlOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUrlVersionArgs = {
  where: VersionWhereInput;
};


/** Intro Section */
export type IntroSection = Node & {
  __typename?: 'IntroSection';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<IntroSection>;
  /** Get the document in other stages */
  documentInStages: Array<IntroSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  /** List of IntroSection versions */
  history: Array<Version>;
};


/** Intro Section */
export type IntroSectionLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Intro Section */
export type IntroSectionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Intro Section */
export type IntroSectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Intro Section */
export type IntroSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Intro Section */
export type IntroSectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Intro Section */
export type IntroSectionPageArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Intro Section */
export type IntroSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageEdge>;
  aggregate: Aggregate;
};

export type ProjectCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<ProjectCreateLocalizationInput>>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};


export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type ImageTextUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type UrlWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UrlWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UrlWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UrlWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  page?: Maybe<PageWhereInput>;
};

export type UrlUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: UrlWhereInput;
  /** Update many input */
  data: UrlUpdateManyInput;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type IntroSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: IntroSectionWhereUniqueInput;
  /** Upsert data */
  data: IntroSectionUpsertInput;
};

export type SeoConnectInput = {
  /** Document to connect */
  where: SeoWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type UrlConnectInput = {
  /** Document to connect */
  where: UrlWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type IntroSectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** smallParagraph input for default locale (en) */
  smallParagraph?: Maybe<Scalars['String']>;
  /** bigBoldParagraph input for default locale (en) */
  bigBoldParagraph?: Maybe<Scalars['String']>;
  /** bigParagraph input for default locale (en) */
  bigParagraph?: Maybe<Scalars['String']>;
  /** briefDescription input for default locale (en) */
  briefDescription?: Maybe<Scalars['String']>;
  page?: Maybe<PageCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<IntroSectionCreateLocalizationsInput>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export type IntroSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<IntroSectionUpdateManyLocalizationInput>>;
};

/** Project portfolio */
export type Project = Node & {
  __typename?: 'Project';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Project>;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  featureImage?: Maybe<Asset>;
  projectCategory?: Maybe<ProjectCategory>;
  /** List of Project versions */
  history: Array<Version>;
};


/** Project portfolio */
export type ProjectLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Project portfolio */
export type ProjectDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Project portfolio */
export type ProjectCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Project portfolio */
export type ProjectUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Project portfolio */
export type ProjectPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Project portfolio */
export type ProjectFeatureImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Project portfolio */
export type ProjectProjectCategoryArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Project portfolio */
export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple Seo documents */
  create?: Maybe<Array<SeoCreateInput>>;
  /** Connect multiple existing Seo documents */
  connect?: Maybe<Array<SeoConnectInput>>;
  /** Override currently-connected documents with multiple existing Seo documents */
  set?: Maybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple Seo documents */
  update?: Maybe<Array<SeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Seo documents */
  upsert?: Maybe<Array<SeoUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Seo documents */
  disconnect?: Maybe<Array<SeoWhereUniqueInput>>;
  /** Delete multiple Seo documents */
  delete?: Maybe<Array<SeoWhereUniqueInput>>;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** A connection to a list of items. */
export type ImageTextConnection = {
  __typename?: 'ImageTextConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ImageTextEdge>;
  aggregate: Aggregate;
};

export type IntroSectionUpdateManyLocalizationInput = {
  data: IntroSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export type ProjectUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
};

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type IntroSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: IntroSectionCreateInput;
  /** Update document if it exists */
  update: IntroSectionUpdateInput;
};

export type SeoUpdateManyLocalizationInput = {
  data: SeoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SeoWhereInput;
  /** Update many input */
  data: SeoUpdateManyInput;
};

export type UrlCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  page?: Maybe<PageCreateOneInlineInput>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  seoTwitterImage_every?: Maybe<SeoWhereInput>;
  seoTwitterImage_some?: Maybe<SeoWhereInput>;
  seoTwitterImage_none?: Maybe<SeoWhereInput>;
  imageTextImage_every?: Maybe<ImageTextWhereInput>;
  imageTextImage_some?: Maybe<ImageTextWhereInput>;
  imageTextImage_none?: Maybe<ImageTextWhereInput>;
  projectFeatureImage_every?: Maybe<ProjectWhereInput>;
  projectFeatureImage_some?: Maybe<ProjectWhereInput>;
  projectFeatureImage_none?: Maybe<ProjectWhereInput>;
};

export type ImageTextUpsertLocalizationInput = {
  update: ImageTextUpdateLocalizationDataInput;
  create: ImageTextCreateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isOpenSource_not?: Maybe<Scalars['Boolean']>;
  featureImage?: Maybe<AssetWhereInput>;
  projectCategory?: Maybe<ProjectCategoryWhereInput>;
};

export type ProjectCategoryUpdateInput = {
  title?: Maybe<Scalars['String']>;
  projects?: Maybe<ProjectUpdateManyInlineInput>;
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type UrlUpdateInput = {
  slug?: Maybe<Scalars['String']>;
  page?: Maybe<PageUpdateOneInlineInput>;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type ImageTextUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Upsert data */
  data: PageUpsertInput;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}
