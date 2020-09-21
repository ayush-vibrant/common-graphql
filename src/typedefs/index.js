const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        getChatData(
            sitecode: String!,
            ad_id: ID!,
            peer_id: ID!,
            user_id: ID!,
            question_categories_list: [String],
            pricing_categories_list: [String]
        ): chatResponseObj
    },
    type chatResponseObj {
        ad: Ad,
        user: User,
        questions: [Question],
        pricing: Pricing
    },
    type Ad {
        id: ID!,
        revision: String,
        phone: String,
        has_phone_param: String,
        created_at: String!,
        created_at_first: String!,
        republish_date: String!,
        valid_to: String!,
        title: String!,
        location_source: String,
        description: String!,
        category_id: String!,
        favorites: String,
        status: adStatusObj,
        locations: String,
        images: [imageObj],
        user_id: String!,
        price: adPriceObj,
        parameters: String!,
        views: String,
        replies: String,
        calls: String,
        monetizationInfo: String,
        main_info: String,
        partner_id: String,
        partner_code: String,
        inspection_info: String
    },
    type User {
        id: ID!,
        about: String,
        anonymous: String,
        avatar_id: String,
        badges: String,
        created_at: String!,
        has_phone: String!,
        images: String!,
        is_banned: String!,
        is_business: String!,
        is_phone_visible: String!,
        lang: String!,
        locations: String!,
        name: String!,
        name_provided: String!,
        phone: String!,
        verification_status: String!
    },
    type Question {
        question_text: String,
        question_id: String,
        topic: String,
        subtopic: String,
        priority: String,
        related_ad_param: String,
        intent: [String],
        sub_topic_display: String,
        type: String,
        queried: Boolean,
        response: String
    },
    type Pricing {
        predicted_price: Int,
        min_price: Int,
        max_price: Int,
        offers_made: Int
    },
    type adPriceObj {
        key: String,
        key_name: String,
        value: adPriceValueObj
    },
    type adPriceValueObj {
        raw: String,
        display: String,
        currency: adPriceValueCurrencyObj
    },
    type adPriceValueCurrencyObj {
        pre: String,
        post: String,
        iso_4217: String,
        locale: String
    },
    type adStatusObj {
        status: String,
        link: String,
        message: String,
        allow_edit: String,
        display: String,
        translated_display: String,
        flags: adStatusFlagObj,
        ban_reason_id: String
    },
    type adStatusFlagObj {
        new: Boolean,
        hot: Boolean
    },
    type imageObj {
        id: String,
        external_id: String,
        width: Int,
        height: Int,
        url: String,
        full: imageDetailObj,
        big: imageDetailObj,
        medium: imageDetailObj,
        small: imageDetailObj
    },
    type imageDetailObj {
        width: Int,
        height: Int,
        url: String
    }`

module.exports = typeDefs