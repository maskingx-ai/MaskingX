# MaskingX

MaskingX is a Windows desktop application for secure, local-first document masking. Document parsing, OCR, masking, and restoration run entirely on your machine. Original files are never uploaded, and document processing does not require a network connection.

## Security and privacy model

MaskingX is designed for sensitive documents that must remain inside the local environment.

- Data safety: document content stays within the local trust boundary and is not sent to a remote service.
- Local-first processing: parsing, OCR, masking, and restoration run on the local machine.
- No-network operation: document processing does not depend on an internet connection or a remote API.
- No document uploads: original documents and extracted content are not uploaded to a server.
- Offline plugin installation: application and plugin packs can be installed without a network connection.
- Local data control: input files and processed outputs remain on paths controlled by the user.
- No cloud dependency: MaskingX does not require a cloud document-processing service.

For sensitive work, obtain packages from the official download page and apply your organization's local access-control and data-handling policies to input and output files.

## Use cases

- Process sensitive documents in offline or restricted-network environments
- Mask personal or business information in documents
- Keep restoration capability for later verification or recovery
- Process multiple documents in batches and track per-file progress

## Key capabilities

- Document parsing: parse document content into local, processable results
- OCR: recognize text in scanned documents or images with local OCR plugins
- Masking: mask identified sensitive content
- Restoration: restore processed results
- Batch tasks: add multiple files and track per-file progress
- Plugin-based packaging: application and plugin packs have independent versions and are used in combinations

## Download

Get the application and plugins from the official download page:

https://maskingx-ai.github.io/MaskingX/

The download page provides four channels: GitHub, QQ Group, Feishu Drive, and Baidu Netdisk. Choose the channel that works best for your network.

## Download contents

MaskingX consists of an application package and plugin packs:

- Application package: the MaskingX desktop application
- Masking Pack: core document masking capability
- OCR Core: document parsing and OCR core capability
- OCR Model: local models required for OCR

Choose the application package and plugin packs that match the version shown on the download page.

## System requirements

- Windows x64
- Reserve enough disk space for the application and plugin combination you install

## Repository

This repository contains only the MaskingX download page and product information. It does not contain the product source code, internal build scripts, or release workflow.

## License

MIT License
