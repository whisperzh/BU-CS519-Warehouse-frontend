import React, {ChangeEvent, useEffect, useState } from "react";


const { DefaultAzureCredential } = require("@azure/identity");
export const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

const vaultName = "keyvault-warehouse";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "host--functionKey--default";

export async function getPassCodeFromKeyVault() {
  const latestSecret = await client.getSecret(secretName);
  console.log(`Latest version of the secret ${secretName}: `, latestSecret);
  const specificSecret = await client.getSecret(secretName, { version: latestSecret.properties.version! });
  console.log(`The secret ${secretName} at the version ${latestSecret.properties.version!}: `, specificSecret);
}

