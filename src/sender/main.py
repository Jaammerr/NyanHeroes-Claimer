import subprocess


def send_nyan_tokens(private_key: str, to_address: str) -> tuple[bool, str]:
    try:
        result = subprocess.run(
            ["cargo", "run", private_key, to_address],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            cwd="src/sender",
            check=True,
            text=True
        )
        output = result.stdout.strip()
        if "Ok" in output:
            transaction = output.replace("Ok(", "").replace(")", "")
            return True, transaction
        else:
            return False, output

    except subprocess.CalledProcessError as e:
        return False, f"Error: {e.stderr.strip()}"
