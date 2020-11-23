export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type UrlCreateManyInlineInput = {
  /** Create and connect multiple existing Url documents */
  create?: Maybe<Array<UrlCreateInput>>;
  /** Connect multiple existing Url documents */
  connect?: Maybe<Array<UrlWhereUniqueInput>>;
};


/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
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
export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
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
  page?: Maybe<PageWhereInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  pageTitle: Scalars['String'];
};

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
};


export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
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

export type IntroSectionCreateManyInlineInput = {
  /** Create and connect multiple existing IntroSection documents */
  create?: Maybe<Array<IntroSectionCreateInput>>;
  /** Connect multiple existing IntroSection documents */
  connect?: Maybe<Array<IntroSectionWhereUniqueInput>>;
};

export type UrlConnectInput = {
  /** Document to connect */
  where: UrlWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};


export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
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

export type UrlUpsertInput = {
  /** Create document if it didn't exist */
  create: UrlCreateInput;
  /** Update document if it exists */
  update: UrlUpdateInput;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
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

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
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
  page?: Maybe<PageCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<IntroSectionCreateLocalizationsInput>;
};

export type IntroSectionUpdateManyLocalizationDataInput = {
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
};

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
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

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
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

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type PageUpdateInput = {
  /** pageTitle input for default locale (en) */
  pageTitle?: Maybe<Scalars['String']>;
  introSection?: Maybe<IntroSectionUpdateOneInlineInput>;
  urls?: Maybe<UrlUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<PageUpdateLocalizationsInput>;
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
};

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

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
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

export type UrlUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UrlWhereUniqueInput;
  /** Upsert data */
  data: UrlUpsertInput;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

export type IntroSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: IntroSectionWhereUniqueInput;
  /** Upsert data */
  data: IntroSectionUpsertInput;
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

export type IntroSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: IntroSectionCreateInput;
  /** Update document if it exists */
  update: IntroSectionUpdateInput;
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
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
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

export type UrlCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  page?: Maybe<PageCreateOneInlineInput>;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
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

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
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

export type IntroSectionUpdateInput = {
  /** smallParagraph input for default locale (en) */
  smallParagraph?: Maybe<Scalars['String']>;
  /** bigBoldParagraph input for default locale (en) */
  bigBoldParagraph?: Maybe<Scalars['String']>;
  /** bigParagraph input for default locale (en) */
  bigParagraph?: Maybe<Scalars['String']>;
  page?: Maybe<PageUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<IntroSectionUpdateLocalizationsInput>;
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


/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

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
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Upsert data */
  data: PageUpsertInput;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
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

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type PageUpsertLocalizationInput = {
  update: PageUpdateLocalizationDataInput;
  create: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type UrlUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UrlWhereUniqueInput;
  /** Document to update */
  data: UrlUpdateInput;
};

export type UrlUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: UrlWhereInput;
  /** Update many input */
  data: UrlUpdateManyInput;
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
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
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

export type IntroSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: IntroSectionWhereUniqueInput;
  /** Document to update */
  data: IntroSectionUpdateInput;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput;
  /** Update many input */
  data: PageUpdateManyInput;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

/** References IntroSection record uniquely */
export type IntroSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UrlCreateOneInlineInput = {
  /** Create and connect one Url document */
  create?: Maybe<UrlCreateInput>;
  /** Connect one existing Url document */
  connect?: Maybe<UrlWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
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

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
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

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** pageTitle input for default locale (en) */
  pageTitle: Scalars['String'];
  introSection?: Maybe<IntroSectionCreateOneInlineInput>;
  urls?: Maybe<UrlCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageCreateLocalizationsInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
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
  BigParagraphDesc = 'bigParagraph_DESC'
}


/** An edge in a connection. */
export type IntroSectionEdge = {
  __typename?: 'IntroSectionEdge';
  /** The item at the end of the edge. */
  node: IntroSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type IntroSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<IntroSectionCreateLocalizationInput>>;
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

export type IntroSectionCreateOneInlineInput = {
  /** Create and connect one IntroSection document */
  create?: Maybe<IntroSectionCreateInput>;
  /** Connect one existing IntroSection document */
  connect?: Maybe<IntroSectionWhereUniqueInput>;
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

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
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
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
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

export type IntroSectionUpsertLocalizationInput = {
  update: IntroSectionUpdateLocalizationDataInput;
  create: IntroSectionCreateLocalizationDataInput;
  locale: Locale;
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

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type IntroSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type IntroSectionCreateLocalizationInput = {
  /** Localization input */
  data: IntroSectionCreateLocalizationDataInput;
  locale: Locale;
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

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}



/** A connection to a list of items. */
export type UrlConnection = {
  __typename?: 'UrlConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UrlEdge>;
  aggregate: Aggregate;
};

export type IntroSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<IntroSectionUpdateManyLocalizationInput>>;
};

export type IntroSectionUpdateManyInput = {
  /** smallParagraph input for default locale (en) */
  smallParagraph?: Maybe<Scalars['String']>;
  /** bigBoldParagraph input for default locale (en) */
  bigBoldParagraph?: Maybe<Scalars['String']>;
  /** bigParagraph input for default locale (en) */
  bigParagraph?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<IntroSectionUpdateManyLocalizationsInput>;
};

export type UrlUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
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

/** A connection to a list of items. */
export type IntroSectionConnection = {
  __typename?: 'IntroSectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<IntroSectionEdge>;
  aggregate: Aggregate;
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

export type IntroSectionUpdateLocalizationDataInput = {
  smallParagraph?: Maybe<Scalars['String']>;
  bigBoldParagraph?: Maybe<Scalars['String']>;
  bigParagraph?: Maybe<Scalars['String']>;
};

export type PageUpdateLocalizationDataInput = {
  pageTitle?: Maybe<Scalars['String']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
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

export type UrlUpdateInput = {
  slug?: Maybe<Scalars['String']>;
  page?: Maybe<PageUpdateOneInlineInput>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type IntroSectionUpdateLocalizationInput = {
  data: IntroSectionUpdateLocalizationDataInput;
  locale: Locale;
};

/** References Url record uniquely */
export type UrlWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

/** An edge in a connection. */
export type UrlEdge = {
  __typename?: 'UrlEdge';
  /** The item at the end of the edge. */
  node: Url;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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

export type IntroSectionUpdateManyLocalizationInput = {
  data: IntroSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type IntroSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: IntroSectionWhereInput;
  /** Update many input */
  data: IntroSectionUpdateManyInput;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Document to update */
  data: PageUpdateInput;
};

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

export type IntroSectionConnectInput = {
  /** Document to connect */
  where: IntroSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
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

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
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
