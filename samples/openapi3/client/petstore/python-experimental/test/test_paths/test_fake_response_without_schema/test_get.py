# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

import unittest
from unittest.mock import patch

import urllib3

import petstore_api
from petstore_api.paths.fake_response_without_schema import get  # noqa: E501
from petstore_api import configuration, schemas, api_client

from .. import ApiTestMixin


class TestFakeResponseWithoutSchema(ApiTestMixin, unittest.TestCase):
    """
    FakeResponseWithoutSchema unit test stubs
        receives a response without schema  # noqa: E501
    """
    _configuration = configuration.Configuration()

    def setUp(self):
        used_api_client = api_client.ApiClient(configuration=self._configuration)
        self.api = get.ApiForget(api_client=used_api_client)  # noqa: E501

    def tearDown(self):
        pass

    response_status = 200






if __name__ == '__main__':
    unittest.main()