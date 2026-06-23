from schemas.app_schema import ArchitectureIR, APISchema

def generate_api_schema(architecture: ArchitectureIR):

    endpoints = []

    if "Login" in architecture.pages:
        endpoints.append({
            "path": "/login",
            "method": "POST"
        })

    if "Dashboard" in architecture.pages:
        endpoints.append({
            "path": "/dashboard",
            "method": "GET"
        })

    if "Contacts" in architecture.pages:

        endpoints.append({
            "path": "/contacts",
            "method": "GET"
        })

        endpoints.append({
            "path": "/contacts",
            "method": "POST"
        })

    if "Analytics" in architecture.pages:

        endpoints.append({
            "path": "/analytics",
            "method": "GET"
        })

    if "Billing" in architecture.pages:

        endpoints.append({
            "path": "/payments",
            "method": "GET"
        })

        endpoints.append({
            "path": "/payments",
            "method": "POST"
        })

    if "Notifications" in architecture.pages:

        endpoints.append({
            "path": "/notifications",
            "method": "GET"
        })

        endpoints.append({
            "path": "/notifications",
            "method": "POST"
        })

    return APISchema(
        endpoints=endpoints
    )
