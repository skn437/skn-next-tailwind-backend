'use strict';

/**
 * music-file service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-file.music-file');
